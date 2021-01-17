<script>
  import { onMount } from "svelte";
  import { mapActive } from "../stores";
  import ProgressBar from "@okrad/svelte-progressbar";
  import "leaflet/dist/leaflet.css";
  import "leaflet.markercluster/dist/MarkerCluster.css";
  import "leaflet.markercluster/dist/MarkerCluster.Default.css";

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
    return p >= 100
      ? "#33D7A3"
      : p > 50
      ? "#9ff193"
      : p > 25
      ? "#ffcb92"
      : p > 0
      ? "#ffe6c0"
      : "#e7e7e7";
  }

  function style(feature) {
    return {
      fillColor: getProgressColor(
        regionsData.Regions.find(r => r.Code === feature.properties.code)
          .Progress
      ),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "0",
      fillOpacity: 1
    };
  }

  function closeMap() {
    mapActive.set(false);
    document.body.classList.remove("overflow-hidden");
  }

  function setDetailsActive(active) {
    detailsActive = active;
  }

  function resetHighlight(e, type = "region") {
    if (
      selectedDepartment &&
      e.target.feature.properties.nom === selectedDepartment.properties.nom
    ) {
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
    if (
      selectedDepartment &&
      e.target.feature.properties.nom === selectedDepartment.properties.nom
    ) {
      return null;
    }

    var layer = e.target;

    hoveredElement = layer.feature;

    layer.setStyle({
      weight: 5,
      color: "white",
      dashArray: "",
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
  };

  onMount(async () => {
    let module = await import("leaflet");
    const L = module.default;
    module = await import("leaflet.markercluster");
    const L1 = module.default;

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

    const data = [
      {
        id: "9e960fba-9f65-49fd-a9ff-d2ff98c3af8f",
        name: "gaec la ferme du parquet",
        address: {
          latitude: 45.913124, 
          longitude: 6.091464
        }
      },
      {
        id: "3a265298-e3ec-4f68-8c52-8e3e93b74b74",
        name: "gaec la ferme du piquet",
        address: {
          latitude: 45.908375, 
          longitude: 6.112522
        }
      }
    ];

     const marker = L.divIcon({
      className: "custom-marker-me",
      html: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 width="25px" height="25px" viewBox="0 0 485.213 485.212" style="enable-background:new 0 0 485.213 485.212;"	 xml:space="preserve"><g>	<path d="M242.606,0C142.124,0,60.651,81.473,60.651,181.955c0,40.928,13.504,78.659,36.31,109.075l145.646,194.183L388.252,291.03		c22.808-30.416,36.31-68.146,36.31-109.075C424.562,81.473,343.089,0,242.606,0z M242.606,303.257		c-66.989,0-121.302-54.311-121.302-121.302c0-66.989,54.313-121.304,121.302-121.304c66.991,0,121.302,54.315,121.302,121.304		C363.908,248.947,309.598,303.257,242.606,303.257z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`
    });

    const coordonnates = data.map((producer, i) =>
      L.marker([producer.address.latitude, producer.address.longitude], {
        icon: marker
      })
      .bindPopup(`
      <h3 style="margin: 0; font-weight: 600;">${producer.name}</h3>
      <p style="margin: 0">${producer.address.line1}</p>
      <p style="margin: 0">${producer.address.zipcode} ${producer.address.city} </p>
      <a class="mx-auto lg:mx-0 hover:underline bg-accent font-bold rounded-full my-1 py-1 px-2 shadow-lg text-white text-center" style="display: block; color: #ffffff !important;" target="_blank" href="https://app.sheaft.com/#/search?producerId=${producer.id}" style="margin: 0">Voir ses produits</a>
      `)
    );

    const markers = L.featureGroup(coordonnates);
    var markersCluster = new L1.MarkerClusterGroup();

    for (var i = 0; i < coordonnates.length; i++) {
      markersCluster.addLayer(coordonnates[i]);
    }

    markersCluster.addTo(map);
    if (coordonnates.length > 0) {
      map.fitBounds(markers.getBounds(), { maxZoom: 8});
    }

  });
</script>

<div id="sheaft-map" style="z-index: 0; border: 10px solid #ffffff;" />

<style lang="scss">
  #sheaft-map {
    height: 300px;
  }

  svg.disabled {
    fill: #e1e1e1;
  }

  @media (max-width: 1024px) {
    .details-panel {
      transition: 0.3s all ease-in-out;
      transform: translateX(-100%);
      max-height: calc(100vh);
      padding-bottom: 130px;
    }

    .details-panel.active {
      transform: translateX(0);
    }
  }

  button.active {
    background-color: #009688;
    color: #ffffff;
  }

  button.disabled {
    background-color: #fafafa;
    color: #dedede;
  }
</style>
