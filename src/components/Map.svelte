<script>
  import { onMount } from "svelte";
  import { mapActive } from "../stores";
  import ProgressBar from "@okrad/svelte-progressbar";
  import "leaflet/dist/leaflet.css";

  let id = "sheaft-map";
  let regionsData = null;
  var map = null;
  let regionsGeojson = null;
  let departmentsGeojson = null;
  let selectedRegion = null;
  let selectedDepartment = null;
  let hoveredElement = null;
  let detailsActive = false;

  function getProgressColor(p) {
    return p >= 100 ? '#33D7A3' :
           p > 50  ? '#9ff193' :
           p > 25  ? '#ffcb92' :
           p >= 0  ? '#ffe0e0' : '#ffe0e0';
  }

  function style(feature) {
      return {
          fillColor: getProgressColor(regionsData.Regions.find((r) => r.Code === feature.properties.code).Progress),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '0',
          fillOpacity: 1
      };
  }
  
  function closeMap() {
    mapActive.set(false); 
    document.body.classList.remove('overflow-hidden');
  }

  function setDetailsActive(active) {
    detailsActive = active;
  }

  function resetHighlight(e, type = "region") {
    if (selectedDepartment && e.target.feature.properties.nom === selectedDepartment.properties.nom) {
      return null;
    }

    if (type === "department") {
      departmentsGeojson.resetStyle(e.target);
    } else {
      regionsGeojson.resetStyle(e.target);
    } 

      hoveredElement = null;
  }

  function highlightFeature(e, type = "region") {
    if (selectedDepartment && e.target.feature.properties.nom === selectedDepartment.properties.nom) {
      return null;
    }
    
    var layer = e.target;

    hoveredElement = layer.feature;

    layer.setStyle({
        weight: 5,
        color: 'white',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
  }

  async function zoomToFeature(e, region) {
    selectedRegion = {
      ...e.target.feature,
      ...region
    };
    
    await loadBoundaries("department", e.target.feature.properties.code);
    map.removeLayer(regionsGeojson);
    map.fitBounds(e.target.getBounds());
  }

  const handleReturn = () => {
    // on déselectionne le département
    if (selectedDepartment) {
      selectedDepartment = null;
      departmentsGeojson.resetStyle();
      map.fitBounds(departmentsGeojson.getBounds());
    }

    // on déselectionne la région
    else if (selectedRegion) {
      selectedRegion = null;
      map.removeLayer(departmentsGeojson);
      regionsGeojson.resetStyle();  
      regionsGeojson.addTo(map);
      map.fitBounds(regionsGeojson.getBounds());
    }
  }

  async function loadBoundaries(type = "region", code = null) {
    try {
      switch (type) {
        case 'region':
          return await fetch('https://sheaftapp.blob.core.windows.net/resources/json/regions.json').then((response) => { response.json().then((res) => {
              regionsGeojson = L.geoJson(res, {
                  style: (feature, layer) => {
                    return {
                      fillColor: getProgressColor(regionsData.Regions.find((r) => r.Code === feature.properties.code).Progress),
                      weight: 2,
                      opacity: 1,
                      color: 'white',
                      dashArray: '0',
                      fillOpacity: 1
                    }
                  },
                  onEachFeature: (feature, layer) => {
                    layer.on({
                        mouseover: highlightFeature,
                        mouseout: resetHighlight,
                        click: (e) => zoomToFeature(e, regionsData.Regions.find((r) => r.Code === feature.properties.code)),
                    });
                  }
              }).addTo(map);
            });
          });
          map.fitBounds(regionsGeojson.getBounds());
        case 'department':
          return await fetch(`https://sheaftapp.blob.core.windows.net/resources/json/departments/${code}.geojson`).then((response) => { response.json().then((res) => {
            departmentsGeojson = L.geoJson(res, {
                style: (feature, layer) => {
                  return {
                    fillColor: getProgressColor(regionsData.Regions.find((r) => r.Code === selectedRegion.properties.code).Departments.find((d) => d.Code === feature.properties.code).Progress),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '0',
                    fillOpacity: 1
                  }
                },
                onEachFeature: (feature, layer) => {
                  layer.on({
                    mouseover: (e) => highlightFeature(e, "department"),
                    mouseout: (e) => resetHighlight(e, "department"),
                    click: (e) => {
                      if (selectedDepartment && (e.target.feature.properties.nom === selectedDepartment.properties.nom)) return;

                      departmentsGeojson.resetStyle();
                      selectedDepartment = {
                        ...e.target.feature,
                        ...regionsData.Regions.find((r) => r.Code === selectedRegion.properties.code).Departments.find((d) => d.Code === feature.properties.code)
                      };
                      layer.setStyle({
                        weight: 6,
                        dashArray: '',
                        fillColor: '#62e5d1',
                        fillOpacity: 0.9
                      });
                      map.fitBounds(e.target.getBounds());
                    }
                  });
                }
            }).addTo(map);
          });
        });
        default:
          return console.error("Type not supported");
      }
    } catch(error) {
      console.error(error);
    }
  }

  onMount(async () => {
    const module = await import('leaflet');
    L = module.default;
    
    map = L.map(id).setView([46.428967, 4.664555], 5);
    map.doubleClickZoom.disable();

    L.tileLayer(
      "https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=xdycAkqlmra0OjZw2dPy",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 18,
        tileSize: 512,
        zoomOffset: -1
      }
    ).addTo(map);

    // no controls on this map
    var lc = document.getElementsByClassName('leaflet-control-container');
    lc[0].style.visibility = 'hidden';

    const regionsDataQuery = await fetch('https://sheaftapp.blob.core.windows.net/progress/departments.json');

    regionsDataQuery.json().then((res) => regionsData = res);

    loadBoundaries();
  });
</script>

<div class="flex flex-wrap bg-white relative">
    <div class="block lg:hidden absolute w-full" style="z-index: 11; bottom: 20px;">
      <p class:hidden={detailsActive} class="text-xl px-2 text-white text-shadow uppercase font-semibold text-center w-full" style="text-shadow: 1px 1px 5px rgba(0,0,0,.8);">{selectedDepartment ? selectedDepartment.properties.nom : (selectedRegion ? selectedRegion.properties.nom : 'France')}</p>
      <div class="flex justify-center px-2">
        {#if mapActive && !selectedDepartment && !selectedRegion}
          <button class="truncate shadow bg-white py-2 px-2 uppercase font-semibold rounded-l-full border-r border-gray-300 w-3/4" on:click={() => closeMap()}>Fermer la carte</button>
        {:else}
          <button disabled={detailsActive} class="truncate shadow bg-white py-2 px-2 uppercase font-semibold rounded-l-full border-r border-gray-300 w-1/4" class:bg-gray-300={detailsActive} on:click={() => handleReturn()}>
            <svg version="1.1" class:disabled={detailsActive} class="fa-icon svelte-ieu2dh" width="16" height="16" role="presentation" viewBox="0 0 512 512" style=""><path key="path-0" d="M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"></path>  </svg>
          </button>
          <button class:active={detailsActive} class="truncate shadow bg-white py-2 px-2 uppercase font-semibold border-r border-gray-300 w-2/4" on:click={() => setDetailsActive(true)}>Voir Détails</button>
        {/if}
        <button class:active={!detailsActive} class="shadow bg-white py-2 px-2 uppercase font-semibold rounded-r-full w-1/4" on:click={() => setDetailsActive(false)}>Carte</button>
      </div>  
    </div>
    <div class:active={detailsActive} class="absolute lg:static bg-white w-full lg:w-6/12 px-5 py-5 overflow-y-scroll details-panel" style="z-index: 10;">
        {#if selectedDepartment || selectedRegion}
          {#if selectedDepartment}
            <h2 class="text-3xl text-gray-800 font-semibold uppercase text-center pt-2">{selectedDepartment.properties.nom}</h2>
            <div class="text-center py-5 progress">
              <!-- Comportement un peu mystique de ProgressBar : quand on lui passe selectedDepartment.Progress et qu'il vaut 0  -->
              <!-- il fini par passer undefined à ProgressBar -> crash  -->
              {#if selectedDepartment.Progress}
                <ProgressBar style='radial' series={[selectedDepartment.Progress]} thickness={4} width={150} thresholds={[
                  {
                    till: 24,       //Color stays red from 0% to 24%
                    color: '#ffe0e0'
                  },
                  {
                    till: 50,       //Color stays orange from 25% to 50%
                    color: '#ffcb92'
                  },
                  {
                    till: 99,       //Color stays green from 51% to 99%
                    color: '#9ff193'
                  },
                  {
                    till: 100,      //Color goes primary at 100%
                    color: '#33D7A3'
                  }
                ]} />
              {:else}
                <ProgressBar style='radial' series={[0]} thickness={4} width={150} thresholds={[
                  {
                    till: 24,       //Color stays red from 0% to 24%
                    color: '#ffe0e0'
                  },
                  {
                    till: 50,       //Color stays orange from 25% to 50%
                    color: '#ffcb92'
                  },
                  {
                    till: 99,       //Color stays green from 51% to 99%
                    color: '#9ff193'
                  },
                  {
                    till: 100,      //Color goes primary at 100%
                    color: '#33D7A3'
                  }
                ]} />
              {/if}
            </div>
          {:else if selectedRegion}
            <h2 class="text-3xl text-gray-800 font-semibold uppercase text-center pt-2">{selectedRegion.properties.nom}</h2>
            <div class="text-center py-5 progress">
              <ProgressBar style='radial' series={[selectedRegion.Progress]} thickness={4} width={150} thresholds={[
                {
                  till: 24,       //Color stays red from 0% to 24%
                  color: '#ffe0e0'
                },
                {
                  till: 50,       //Color stays orange from 25% to 50%
                  color: '#ffcb92'
                },
                {
                  till: 99,       //Color stays green from 51% to 99%
                  color: '#9ff193'
                },
                {
                  till: 100,      //Color goes primary at 100%
                  color: '#33D7A3'
                }
              ]} />
            </div>
          {/if}

          {#if selectedDepartment && selectedDepartment.Locked}
            <p class="text-xl uppercase py-3 text-center">Plus que <span class="text-primary text-2xl">{parseInt(selectedDepartment.Target) - parseInt(selectedDepartment.Active)} producteurs</span> <br/> pour déverrouiller cette zone</p>
          {/if}
          
          {#if selectedDepartment && !selectedDepartment.Locked}
            <p class="text-xl uppercase py-3 text-center"><span class="text-primary text-2xl">144 producteurs</span> <br/> inscrits dans cette zone</p>
          {/if}

          {#if selectedRegion && !selectedDepartment}
            {#if selectedRegion.DepartmentsUnlockedCount == 0}
              <p class="text-xl uppercase py-3 text-center">Aucun département n'a été déverrouillé.</p>
            {:else}
              <p class="text-xl uppercase py-3 text-center"><span class="text-primary text-2xl">{selectedRegion.DepartmentsUnlockedCount} départements déverrouillés</span> <br/> sur {selectedRegion.DepartmentsCount}</p>
            {/if}
          {/if}
          
          <div class="flex flex-wrap justify-center mt-3">
            <div class="block lg:flex lg:flex-row-reverse w-full lg:w-auto">
              <div class="w-full lg:w-auto text-xl text-left lg:text-center lg:mt-0 pb-4 lg:pb-0 border-b border-gray-300 lg:border-none">
                <div class="flex lg:block items-end">
                  <div class="w-1/3 text-center lg:w-full">
                    <svg version="1.1" fill="#ecc94b" class="fa-icon hidden lg:inline svelte-ieu2dh" width="30" height="30" role="presentation" viewBox="0 0 640 512"><path key="path-0" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>  </svg>
                    <div class="m-auto w-16 h-16 rounded-full border-2 border-yellow-500" style="background-image: url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'); background-size: cover;"  />
                  </div>
                  <div class="w-2/3 ml-2 lg:ml-0 lg:w-full">
                    <p class="text-xl lg:text-2xl">Noël Mugnier</p>
                    <p class="text-lg lg:text-xl text-yellow-500">12000</p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-auto text-xl text-left lg:text-center lg:mr-12 lg:mt-12 py-4 lg:py-0 border-b border-gray-300 lg:border-none">
                <div class="flex lg:block items-end">
                  <div class="w-1/3 text-center lg:w-full">
                    <svg version="1.1" fill="#a0aec0" class="fa-icon hidden lg:inline svelte-ieu2dh" width="30" height="30" role="presentation" viewBox="0 0 640 512"><path key="path-0" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>  </svg>
                    <div class="m-auto w-16 h-16 rounded-full border-2 border-gray-500" style="background-image: url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'); background-size: cover;"  />
                  </div>
                  <div class="w-2/3 ml-2 lg:ml-0 lg:w-full">
                    <p class="text-xl lg:text-2xl">Noël Mugnier</p>
                    <p class="text-lg lg:text-xl text-gray-500">12000</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-auto text-xl text-left lg:text-center lg:ml-12 lg:mt-12 py-4 lg:py-0 ">
              <div class="flex lg:block items-end">
                <div class="w-1/3 text-center lg:w-full">
                  <svg version="1.1" fill="#c05621" class="fa-icon hidden lg:inline svelte-ieu2dh" width="30" height="30" role="presentation" viewBox="0 0 640 512"><path key="path-0" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>  </svg>
                  <div class="m-auto w-16 h-16 rounded-full border-2 border-orange-700" style="background-image: url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'); background-size: cover;"  />
                </div>
                <div class="w-2/3 ml-2 lg:ml-0 lg:w-full">
                  <p class="text-xl lg:text-2xl">Noël Mugnier</p>
                  <p class="text-lg lg:text-xl text-orange-700">12000</p>
                </div>
              </div>
            </div>
          </div>
        {/if}
        {#if !selectedRegion && !selectedDepartment}
          <div class="hidden lg:block">
            <h4
            class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-8 md:mt-10">
            Consommez local, gagnez des cadeaux !
              <span class="bg-primary h-1 w-20 block mt-4" />
            </h4>
            <p class="text-gray-600 text-xl mb-4">
              Quand on fait quelque chose de bien, il est normal d'être récompensé.
            </p>
            <p class="text-gray-600 text-xl mb-4">
              Sur Sheaft, chacune de vos actions vous rapporte des points : un achat, un avis sur un produit, un partage
              sur les réseaux... toutes ces actions qui aident à faire connaître et améliorer les conditions de travail de nos producteurs.
            </p>
            <p class="text-gray-600 text-xl mb-4">
              Tous les mois, nous établissons des partenariats avec des artisans et producteurs de votre région qui proposeront des cadeaux aux membres ayant le plus de points.
            </p>
            <p class="text-gray-600 text-xl mb-4">
              Votre position sera, avec votre accord, visible de tous en temps réel. Vous êtes un consommateur éthique et responsable, vous pouvez être fier !
            </p>
            <p class="text-gray-700 font-semibold text-xl">
              Cliquez sur une région sur la carte pour consulter son état et celui de ses départements.
            </p>
          </div>
        {/if}
    </div>
    <div class="relative lg:w-6/12 w-full">
        <div class:block={selectedDepartment && selectedRegion} class="hidden lg:block absolute text-white bg-white shadow m-auto rounded-full" style="z-index: 10; left: 50%; transform: translateX(-50%); top: 10px;">
          {#if selectedDepartment}
            <button class="text-left text-xl font-semibold uppercase text-gray-800 flex items-center rounded-full text-center px-4 py-2" on:click={() => handleReturn()}>
              Afficher {selectedRegion.properties.nom}
            </button>
          {:else if selectedRegion}
            <button class="text-left text-xl font-semibold uppercase text-gray-800 flex items-center rounded-full text-center px-4 py-2" on:click={() => handleReturn()}>
              Afficher la carte de France
            </button>
          {/if}
        </div>
        <div id="sheaft-map" style="z-index: 0;"></div>

        {#if hoveredElement}
          <div class="absolute text-center hidden lg:block" style="bottom: 20px; z-index: 1000; left: 50%; transform: translateX(-50%);">
            <p class="text-3xl text-gray-700 bg-white py-2 px-4 shadow">{hoveredElement.properties.nom}</p>
          </div>
        {/if}
    </div>
</div>


<style lang="scss">
  #sheaft-map {
    height: 600px;
  }

  svg.disabled {
    fill: #e1e1e1;
  }

  @media (max-width: 1024px) {
    #sheaft-map {
      height: calc(100vh - 52px);
    }

    .details-panel {
      transition: .3s all ease-in-out;
      transform: translateX(-100%);
      max-height: calc(100vh);
      padding-bottom: 130px;
    }

    .details-panel.active {
      transform: translateX(0);
    }
  }
  
  button.active {
    background-color: #33D7A3;
    color: #ffffff;
  }

  button.disabled {
    background-color: #fafafa;
    color: #dedede;
  }
</style>