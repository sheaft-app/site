<script>
  import { onMount } from "svelte";
  
  import "leaflet/dist/leaflet.css";
  import "leaflet.markercluster/dist/MarkerCluster.css";
  import "leaflet.markercluster/dist/MarkerCluster.Default.css";

  let map = null;

  onMount(async () => {
    let module = await import("leaflet");
    const L = module.default;
    module = await import("leaflet.markercluster");
    const L1 = module.default;

    map = L.map("sheaft-map").setView([46.428967, 4.664555], 5);
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

    const data = await fetch("https://content.sheaft.com/producers/producers.json").then(response => response.json());

     const marker = L.divIcon({
      className: "custom-marker",
      html: `<svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="-46 0 512 512" width="25px" class="hovered-paths"><g><path d="m177.128906 232.5h64.609375l25.210938-55h-101.953125zm0 0" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#205164"/><path d="m210 0c-115.792969 0-210 94.207031-210 210 0 93.359375 61.519531 175.210938 150.441406 201.429688l46.140625 92.277343c2.539063 5.082031 7.734375 8.292969 13.417969 8.292969 5.679688 0 10.875-3.210938 13.414062-8.292969l46.140626-92.277343c88.925781-26.214844 150.445312-108.070313 150.445312-201.429688 0-115.792969-94.207031-210-210-210zm-39.671875 304.5c-8.261719 0-15-6.738281-15-15s6.738281-15 15-15 15 6.738281 15 15-6.738281 15-15 15zm75 0c-8.261719 0-15-6.738281-15-15s6.738281-15 15-15 15 6.738281 15 15-6.738281 15-15 15zm58.636719-135.75-38.96875 85c-2.441406 5.332031-7.769532 8.75-13.632813 8.75h-86.289062c-7.039063 0-13.132813-4.894531-14.648438-11.769531l-23.867187-108.230469h-8.835938c-8.285156 0-15-6.714844-15-15s6.714844-15 15-15h20.886719c7.042969 0 13.132813 4.894531 14.648437 11.769531l5.125 23.230469h131.945313c5.109375 0 9.867187 2.601562 12.625 6.898438 2.761719 4.300781 3.140625 9.707031 1.011719 14.351562zm0 0" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#205164"/></g> </svg>`
    });

    const coordonnates = data.map((producer, i) =>
      L.marker([producer.address.latitude, producer.address.longitude], {
        icon: marker
      })
      .bindPopup(`
      <div class="flex relative flex-wrap justify-between">
        <img
          class="h-12 w-12 rounded-full p-1 border border-gray-800 border-solid mb-3 m-auto"
          src=${producer.picture ? producer.picture : 'img/farmer.svg'}
          alt="Producteur" />
        <div class="text-center m-auto">
          <h3 style="margin: 0; font-weight: 600;">${producer.name}</h3>
          <p style="margin: 0">${producer.address.line1}</p>
          <p style="margin: 0">${producer.address.zipcode} ${producer.address.city} </p>
        </div>
        ${producer.hasProducts  
          ? `<a class="mt-3 w-full mx-auto lg:mx-0 hover:underline bg-accent font-bold rounded-full my-1 py-1 px-2 shadow-lg text-white text-center" style="display: block; color: #ffffff !important;" target="_blank" href="https://app.sheaft.com/#/search?producerId=${producer.id}" style="margin: 0">Voir ses produits</a>`
          : ''
        }
      </div>
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

  button.active {
    background-color: #009688;
    color: #ffffff;
  }

  button.disabled {
    background-color: #fafafa;
    color: #dedede;
  }
</style>
