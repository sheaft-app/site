<script>
  import qs from "qs";
  import { onMount } from "svelte";
  import { mapActive } from "../stores";
  import Map from "../components/Map.svelte";
  let error = null;

  onMount(() => {
    error = qs.parse(window.location.search.slice(1))["error"];
  });

  let selectedValue = null;

  const showMap = () => {
    mapActive.set(true);

    document.body.classList.add("overflow-hidden");
  };
</script>

<svelte:head>
  <title>Sheaft - Consommer local, plus facilement</title>
</svelte:head>

<div class="pt-16 md:pt-24">
  <div
    class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row
    items-center text-white pb-12 md:p-16 md:p-0">
    <div
      class="flex flex-col w-full lg:w-2/5 justify-center items-start text-left">
      <div class="bg-orange-200 shadow-lg p-4 rounded text-normal mt-2 md:mt-0" style="width: fit-content;">
        <p>La sortie est prévue pour bientôt, on peaufine !</p>
      </div>
      <h1 class="my-4 text-4xl md:text-5xl font-bold leading-tight">
        Consommer local,
        <br />
        plus facilement.
      </h1>
      <p class="leading-normal text-xl md:text-2xl mb-8">
        Découvrez et commandez en quelques clics des produits de qualité issus
        de la production locale.
      </p>

      <div
        class="flex flex-wrap flex-col-reverse md:flex-row self-center
        md:self-auto">
        <a
          href="#introduction"
          class="mx-auto lg:mx-0 hover:underline bg-white 
          font-bold rounded-full my-6 py-4 px-8 shadow-lg text-normal">
          En savoir plus
        </a>
      </div>
    </div>
    <div class="hidden lg:block w-full md:w-3/5 py-6 text-center">
      <img
        class="w-full md:w-4/5 z-50 m-auto"
        src="img/shopping.svg"
        alt="Shopper des produits locaux" />
    </div>

  </div>
</div>

<div class="relative -mt-12 lg:-mt-24">
  <svg
    viewBox="0 0 1428 174"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g
        transform="translate(-2.000000, 44.000000)"
        fill="#FFFFFF"
        fill-rule="nonzero">
        <path
          d="M0,0 C90.7283404,0.927527913 147.912752,27.187927
          291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785
          759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
          opacity="0.100000001" />
        <path
          d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657
          546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068
          979,55.0741668 C931.069965,56.122511 810.303266,74.8455141
          616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612
          100,104.708498 Z"
          opacity="0.100000001" />
        <path
          d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883
          1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071
          1046,51.6521276 Z"
          id="Path-4"
          opacity="0.200000003" />
      </g>
      <g
        transform="translate(-4.000000, 76.000000)"
        fill="#FFFFFF"
        fill-rule="nonzero">
        <path
          d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865
          C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759
          396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372
          556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991
          C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317
          818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522
          1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387
          C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748
          1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031
          L0.457,34.035 Z" />
      </g>
    </g>
  </svg>
</div>

<div id="introduction" class="relative bg-white">
  <div class="container mx-auto px-6 py-6 md:pt-24 relative">
    <div class="m-auto text-center mb-16 youtube-frame">
       <h4
          class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
        Découvrez Sheaft en détails dans cette vidéo explicative
      </h4>
      <iframe title="YouTube" class="m-auto w-11/12 lg:w-1/2" height="315" src="https://www.youtube.com/embed/AU6PrtmXN-U" style="border-radius: 10px; box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.4);" frameborder="0" allowfullscreen></iframe>
    </div>
    <div
      class="flex flex-col md:flex-row items-center mt-16 md:mt-0
      md:mt-16 lg:mt-0">
      <img
        src="/img/easy.svg"
        class="md:w-1/3"
        alt="Consommer local c'est difficile" />
      <div class="md:ml-16 xl:ml-32">
        <h4
          class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
          Consommer local, du parcours d'obstacles à la promenade de santé
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-xl mb-4">
          Vous voulez mieux manger, mieux rémunérer les agriculteurs de votre région, et participer à la lutte
          contre le réchauffement climatique.
        </p>
        <p class="text-xl mb-4">
          Pourtant, il est plus compliqué d'acheter un yaourt produit à 20km de
          chez vous qu'un avocat produit au Mexique.
        </p>
        <p class="text-xl mb-4">
          Il est temps de changer les choses.
        </p>
      </div>
    </div>
  </div>
</div>

<div id="association" class="relative bg-white">
  <div class="container mx-auto py-3 md:px-6 md:py-6 relative">
    <h4 class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0 px-6 lg:px-0">
      Sheaft en trois mots
      <span class="bg-primary h-1 w-20 block mt-4" />
    </h4>
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col px-6 bg-white lg:shadow-lg py-6 md:mr-2">
        <div class="text-3xl text-primary w-16 h-16 rounded bg-green-100 flex justify-center items-center mb-6">
        <svg version="1.1" class="fa-icon svelte-ieu2dh" width="10" height="16" role="presentation" viewBox="0 0 320 512" style=""><path key="path-0" d="M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"></path>  </svg>
        </div>  
        <h4 class="font-semibold text-xl mb-3">Gratuit</h4>
        <p class="text-lg leading-relaxed text-gray-600">
          Aucun abonnement, aucun taux de commission. Un producteur bien rémunéré, un consommateur qui paie moins cher.
        </p>
      </div>
      <div class="flex flex-col px-6 bg-white lg:shadow-lg py-6 md:mr-2">
        <div class="text-3xl text-primary w-16 h-16 rounded bg-green-100 flex justify-center items-center mb-6"><svg version="1.1" class="fa-icon svelte-ieu2dh" width="16" height="16" role="presentation" viewBox="0 0 512 512" style=""><path key="path-0" d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"></path>  </svg></div>  
        <h4 class="font-semibold text-xl mb-3">Transparent</h4>
        <p class="text-lg leading-relaxed text-gray-600">
          Sheaft est une association loi 1901, nous publions tous nos bilans ainsi que toutes nos prises de décision.
        </p>
      </div>
      <div class="flex flex-col px-6 bg-white lg:shadow-lg py-6">
        <div class="text-3xl text-primary w-16 h-16 rounded bg-green-100 flex justify-center items-center mb-6"><svg version="1.1" class="fa-icon svelte-ieu2dh" width="16" height="12.8" role="presentation" viewBox="0 0 640 512" style=""><path key="path-0" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>  </svg></div>  
        <h4 class="font-semibold text-xl mb-3">Communautaire</h4>
        <p class="text-lg leading-relaxed text-gray-600">
          N’importe qui peut consulter et proposer des modifications à l’écosystème Sheaft, même des personnes externes à l’association.
        </p>
      </div>
    </div>
  </div>
</div>

<div id="our-app" class="relative">
  <div class="container mx-auto px-6 py-12 pb-12 relative">
    <h3
      class="flex flex-col items-center text-3xl md:text-4xl text-white
      font-bold mb-12 text-center">
      Une expérience moderne et agréable
      <span class="bg-white h-1 w-20 block mt-4" />
    </h3>
    <p class="text-white text-center text-xl mb-12">Consommer local ne devrait pas être synonyme de sacrifices sur l’expérience d’achat.
     Pour nous, c’est important d’utiliser un outil qui soit agréable à l’utilisation et à l’oeil.</p>
    <div class="flex flex-col md:flex-row justify-center mt-4">
      <img src="./img/app_preview.jpg" class="shadow-lg hidden lg:block rounded-lg" alt="Notre application" style="max-width: 900px; max-height: 540px;" />
      <img src="./img/app_preview_mobile.jpg" class="shadow-lg block lg:hidden m-auto rounded-lg" alt="Notre application" style="width: 300px; max-height: 534px;" />
    </div>
  </div>
</div>

<div id="process" class="relative bg-gray-100">
  <div class="container mx-auto px-6 lg:px-0 py-12 pb-12 relative">
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col items-center md:px-6 lg:px-6 mb-5 lg:mb-0">
        <span class="text-4xl text-primary rounded-full bg-white w-16 h-16 flex justify-center items-center mb-3 shadow">1</span>
        <h4 class="font-semibold text-2xl mb-2 text-primary">Recherchez</h4>
        <p class="text-center text-xl leading-relaxed font-light">
          Sheaft affiche tous les produits des producteurs
          <b>autour de vous</b>. Vous n'avez qu'à faire vos emplettes !
        </p>
      </div>
      <div class="flex flex-col items-center md:px-6 lg:px-6 mb-5 lg:mb-0">
        <span class="text-4xl text-primary rounded-full bg-white w-16 h-16 flex justify-center items-center mb-3 shadow">2</span>
        <h4 class="font-semibold text-2xl mb-2 text-primary">Choisissez</h4>
        <p class="text-center text-xl leading-relaxed font-light">
          Choisissez parmi les <b>points de retrait du producteur</b> : à la ferme, au marché, etc.
        </p>
      </div>
      <div class="flex flex-col items-center md:px-6 lg:px-6">
        <span class="text-4xl text-primary rounded-full bg-white w-16 h-16 flex justify-center items-center mb-3 shadow">3</span>
        <h4 class="font-semibold text-2xl mb-2 text-primary">Récupérez</h4>
        <p class="text-center text-xl leading-relaxed font-light">
          Vous êtes notifié dès que votre commande est prête :
          c'est l'heure <b>d'aller la chercher</b> !
        </p>
      </div>
    </div>
  </div>
</div>

<div id="features" class="relative bg-white">
  <div class="container mx-auto px-6 py-6 relative">
    <div  
      class="flex flex-col md:flex-row items-center mb-6 xl:mb-8 mt-6 md:mt-0
      lg:mt-0 feature-element justify-center">
      <img
        src="/img/1.jpg"
        style="width: 700px;"
        class="md:w-1/3 hidden lg:block"
        alt="Trouver des produits locaux" />
      <div class="lg:ml-16 xl:ml-32">
        <div class="rounded-full w-12 h-12 p-2 flex bg-primary items-center justify-center mb-4">
          <svg version="1.1" role="presentation" viewBox="0 0 512 512" style=""><path key="path-0" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>  </svg>
        </div>
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
          Trouvez les produits autour de vous
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Utilisez Sheaft pour trouver les produits des producteurs autour de vous.
          Chaque produit est étiqueté par un code couleur pour prendre connaissance de la distance de production d'un coup d'oeil.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-6 xl:mb-8 feature-element justify-center">
      <div class="md:mr-16 xl:mr-32">
        <div class="rounded-full w-12 h-12 p-2 flex bg-primary items-center justify-center mb-4">
          <svg version="1.1" class="fa-icon" role="presentation" viewBox="0 0 384 512" style=""><path key="path-0" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>  </svg>
        </div>
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
          À la ferme, au marché, où vous voulez !
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Notre outil permet aux producteurs de renseigner leurs différents points de vente. Vous pourrez donc choisir, 
          s'il y en a plusieurs, celui auquel vous souhaitez récupérer votre commande : au marché, à la ferme, etc. Flexibilité !
        </p>
      </div>
      <img src="/img/2.jpg" class="md:w-1/3 hidden lg:block" alt="Choisissez votre lieu et horaire et récupération" />
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-6 xl:mb-8 md:mt-0
      lg:mt-0 feature-element justify-center">
      <img src="/img/5.jpg" class="md:w-1/3 hidden lg:block" alt="Voir le lieu de production" style="width: 700px;" />
      <div class="lg:ml-16 xl:ml-32">
        <div class="rounded-full w-12 h-12 p-2 flex bg-primary items-center justify-center mb-4">
          <svg version="1.1" class="fa-icon" role="presentation" viewBox="0 0 640 512" style=""><path key="path-0" d="M528 336c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 112c-13.23 0-24-10.77-24-24s10.77-24 24-24 24 10.77 24 24-10.77 24-24 24zm80-288h-64v-40.2c0-14.12 4.7-27.76 13.15-38.84 4.42-5.8 3.55-14.06-1.32-19.49L534.2 37.3c-6.66-7.45-18.32-6.92-24.7.78C490.58 60.9 480 89.81 480 119.8V160H377.67L321.58 29.14A47.914 47.914 0 0 0 277.45 0H144c-26.47 0-48 21.53-48 48v146.52c-8.63-6.73-20.96-6.46-28.89 1.47L36 227.1c-8.59 8.59-8.59 22.52 0 31.11l5.06 5.06c-4.99 9.26-8.96 18.82-11.91 28.72H22c-12.15 0-22 9.85-22 22v44c0 12.15 9.85 22 22 22h7.14c2.96 9.91 6.92 19.46 11.91 28.73l-5.06 5.06c-8.59 8.59-8.59 22.52 0 31.11L67.1 476c8.59 8.59 22.52 8.59 31.11 0l5.06-5.06c9.26 4.99 18.82 8.96 28.72 11.91V490c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-7.14c9.9-2.95 19.46-6.92 28.72-11.91l5.06 5.06c8.59 8.59 22.52 8.59 31.11 0l31.11-31.11c8.59-8.59 8.59-22.52 0-31.11l-5.06-5.06c4.99-9.26 8.96-18.82 11.91-28.72H330c12.15 0 22-9.85 22-22v-6h80.54c21.91-28.99 56.32-48 95.46-48 18.64 0 36.07 4.61 51.8 12.2l50.82-50.82c6-6 9.37-14.14 9.37-22.63V192c.01-17.67-14.32-32-31.99-32zM176 416c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm22-256h-38V64h106.89l41.15 96H198z"></path>  </svg>
        </div>
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
          Voir le lieu de production d’un coup d’oeil
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Un simple passage de la souris dévoile le lieu de production.
          C’est encore plus rapide que de chercher sur une étiquette !
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-6 xl:mb-8 feature-element justify-center">
      <div class="lg:mr-16 xl:mr-32">
        <div class="rounded-full w-12 h-12 p-2 flex bg-primary items-center justify-center mb-4">
         <svg version="1.1" role="presentation" viewBox="0 0 576 512" style=""><path key="path-0" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path>  </svg>
        </div>
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
          Dénichez les meilleurs produits
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Chaque produit peut être évalué par les consommateurs. 
          Trop salé ? Trop sucré ? Trop bon ? Plus rien ne vous échappera.
        </p>
      </div>
      <img src="/img/4.jpg" class="md:w-1/3 hidden lg:block" alt="Evaluations" />
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-6 xl:mb-8 feature-element justify-center">
      <img src="/img/3.jpg" style="width: 700px;" class="md:w-1/3 hidden lg:block" alt="Gagnez des cadeaux !" />
      <div class="lg:ml-16 xl:ml-32">
        <div class="rounded-full w-12 h-12 p-2 flex bg-primary items-center justify-center mb-4">
          <svg version="1.1" class="fa-icon svelte-ieu2dh" width="16" height="16" role="presentation" viewBox="0 0 512 512" style=""><path key="path-0" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path>  </svg>
        </div>
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
          Gagnez des cadeaux !
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Sur Sheaft, chaque action rapporte des points : commandes, avis, partage sur les réseaux, report d’un bug.
        </p>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Tous les mois, des artisans et producteurs de votre région pourront proposer des cadeaux aux membres ayant cumulé le plus de points.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="bg-white">
  <div class="container mx-auto px-6 pt-2 pb-16 relative">
    <div class="bg-white lg:shadow-lg rounded lg:px-16 py-6 flex flex-col-reverse md:flex-row flex-wrap justify-between lg:mt-10">
      <div class="w-full md:w-2/3">
        <h4
            class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
            Vous êtes producteur/productrice ?
            <span class="bg-primary h-1 w-20 block mt-4" />
          </h4>
        <p class="text-xl mb-4">Sheaft a été pensée pour vous faire gagner du temps.</p>
        <p class="text-xl mb-8">Trouvez plus facilement des clients, fixez vos prix, gagnez en flexibilité, simplifiez la prise de commande.</p>
        <a
          class="mx-auto lg:mx-0 hover:underline bg-accent 
          font-bold rounded-full my-6 py-4 px-8 shadow-lg text-white"
          href="/producers"
          target="_blank">
          En savoir plus
        </a>
      </div>
      <img src="./img/youre_producer.jpg" style="max-width: 170px; height: 190px;" alt="Producteurs" />
    </div>

    <div class="bg-white lg:shadow-lg rounded lg:px-16 py-6 flex flex-wrap justify-between mt-10">
      <img src="./img/youre_shops.jpg" style="max-width: 230px; height: 180px;" alt="Commerçants" />
      <div class="w-full md:w-2/3">
        <h4
            class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
            Vous êtes commerçant(e) ?
            <span class="bg-primary h-1 w-20 block mt-4" />
          </h4>
        <p class="text-xl mb-4">Sheaft intègre dans sa première version des fonctionnalités pour vous aider à simplifier vos échanges avec les producteurs.</p>
        <p class="text-xl mb-4">Pour en savoir plus, <a class="text-accent hover:underline" href="mailto:contact@sheaft.com" target="_blank">contactez-nous par mail</a> ou <a class="text-accent hover:underline" href="https://discord.gg/FGSg6Wm" target="_blank">posez-nous la question sur Discord</a>.</p>
      </div>
    </div>
  </div>
</div>

<!-- <div id="projects" class="relative bg-white pb-12">
  <div class="container mx-auto px-6 py-16 relative">
    <h4 class="text-2xl md:text-3xl font-bold text-center">Nos prochains projets</h4>
    <span class="bg-primary h-1 w-20 block mt-4 m-auto mb-4" />
    <div class="flex flex-wrap">
      <div class="w-1/3 text-center">
        <div class="rounded-full w-16 h-16 bg-red-500 m-auto"></div>
        <div>
          <p class="font-semibold text-2xl">Réduire le gaspillage</p>
          <p class="text-xl">Une carte pour localiser rapidement des invendus à récupérer à la ferme.</p>
        </div>
      </div>
      <div class="w-1/3 text-center">
        <div class="rounded-full w-16 h-16 bg-red-500 m-auto"></div>
        <div>
          <p class="font-semibold text-2xl">Réduire les transports</p>
          <p class="text-xl">Si mon voisin a commandé au même producteur, pourquoi ne pas récupérer sa commande ?</p>
        </div>
      </div> 
      <div class="w-1/3 text-center">
        <div class="rounded-full w-16 h-16 bg-red-500 m-auto"></div>
        <div>
          <p class="font-semibold text-2xl">Créer un réseau de points de retrait</p>
          <p class="text-xl">Proposer aux petits commerces de devenir points de retrait pour éviter la mise en rayon.</p>
        </div>
      </div>
    </div>
  </div>
</div> -->

<h3
  class="text-center py-12 px-6 text-3xl md:text-4xl text-white font-light pb-20">
  Briser les obstacles d'une consommation éthique en offrant une transition en
  douceur vers des modes de consommation plus responsables
</h3>

<div class="bg-white">
  <div id="about-us" class="py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 md:pr-8 lg:pr-16">
          <img
            src="/img/team.svg"
            class="-mt-24 md:mt-0 lg:-mt-24 mb-16 md:mb-0"
            alt="d'où nous venons" />
        </div>
        <div class="md:w-1/2">
          <h3
            class="flex flex-col text-3xl md:text-4xl font-bold
            mb-6 mt-4 md:mt-0">
            Construire ensemble un futur responsable
            <span class="bg-primary h-1 w-20 block mt-4" />
          </h3>
          <p class="text-xl mb-4">
            Ensemble, posons les briques de nouveaux modes de consommation tournés vers l’humain et l’écologie. 
          </p>
          <p class="text-xl mb-4">
            Nous sommes tous ensemble responsables de demain. Il est temps d’arrêter de demander le changement, il est temps de le devenir.
          </p>
          <p class="text-xl mb-4">
            Sheaft, c'est une association qui lutte pour le développement de la
            consommation alimentaire en circuit court. Mais ce n'est qu'un début.
          </p>
          <div class="my-8">
            <a
              class="mx-auto lg:mx-0 hover:underline bg-accent 
              font-bold rounded-full my-6 py-4 px-8 shadow-lg text-white"
              href="/about"
              target="_blank">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
      <div class="bg-white lg:shadow-lg rounded lg:px-16 py-6 flex flex-col-reverse md:flex-row flex-wrap justify-between mt-10 items-center">
        <div class="w-full md:w-2/3">
          <h4
            class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
            Vous avez beaucoup à apporter
            <span class="bg-primary h-1 w-20 block mt-4" />
          </h4>
          <p class="text-xl mb-4">Sheaft est présente sur Discord pour qu’on puisse échanger tous ensemble, autour de vos idées ou d’un débat chocolatine/pain au chocolat <span class="text-xs">(pain au chocolat bien sûr 😉)</span>.</p>
          <a href="https://discord.gg/FGSg6Wm" target="_blank">
            <img class="mb-4" src="img/discord.png" style="max-width: 200px;" alt="Rejoindre notre Discord" />
          </a>
          <p class="text-xl mb-4">Vous êtes un(e) développeur/se web ? Prenez notre code sur GitHub, changez-le et montrez-nous directement !</p>
          <a href="https://github.com/sheaft-app" target="_blank">
            <img src="img/github.jpg" style="max-width: 200px;" alt="Voir notre code source" />
          </a>
        </div>
        <img src="./img/community.jpg" style="width: 260px; height: 230px;" alt="Communauté" />
      </div>
    </div>
  </div>
</div>

<svg
  class="wave-top"
  viewBox="0 0 1439 147"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
      <g class="wave" fill="#ffffff">
        <path
          d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824
          1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22
          C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121
          804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309
          621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108
          C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736
          205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
      </g>
      <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
        <g
          transform="translate(719.500000, 68.500000) rotate(-180.000000)
          translate(-719.500000, -68.500000) ">
          <path
            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927
            291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785
            759,82.7326078 C469.336065,156.254352 216.336065,153.6679
            0,74.9732496"
            opacity="0.100000001" />
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657
            546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068
            979,55.0741668 C931.069965,56.122511 810.303266,74.8455141
            616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612
            100,104.708498 Z"
            opacity="0.100000001" />
          <path
            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883
            1439,40.1656806 L1439,120 C1271.17211,77.9435312
            1140.17211,55.1609071 1046,51.6521276 Z"
            opacity="0.200000003" />
        </g>
      </g>
    </g>
  </g>
</svg>

<section class="container mx-auto text-center pt-5 mt-3">
  <h1
    class="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center
    text-white">
    Et ça sort quand ?!
  </h1>
  <div class="w-full mb-4">
    <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
  </div>
  <h3
    class="my-4 md:my-8 text-xl md:text-3xl leading-tight text-white px-3
    md:px-0">
    La sortie se compte en jours, on peaufine et on est là !<br/>
    Pour rester informé(e) de toutes nos avancées, inscrivez-vous à notre newsletter :
  </h3>
  <div class="items-center w-full px-4 pb-6">
<div id="mc_embed_signup" class="mc_embed_signup">
<form action="https://sheaft.us18.list-manage.com/subscribe/post?u=a2e9bef717a56b12586cdbf76&amp;id=e1b8d283f5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
      <div class="flex flex-wrap justify-center">
        <div class=" w-full md:w-6/12">
<div class="indicates-required text-white"><span class="asterisk ">*</span> champs requis</div>
<div class="mc-field-group">
	<label for="mce-EMAIL" class="text-white">Adresse e-mail  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email w-full bg-white font-bold rounded 
  px-3 shadow-lg md:text-xl" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME" class="text-white">Prénom  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="FNAME" class="required w-full bg-white font-bold rounded 
  px-3 shadow-lg md:text-xl" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-KIND" class="text-white">Je suis  <span class="asterisk">*</span>
</label>
	<select name="KIND" class="required w-full bg-white font-bold rounded 
  px-3 shadow-lg md:text-xl" id="mce-KIND">
	<option value=""></option>
	<option value="Consommateur">Consommateur</option>
<option value="Producteur">Producteur</option>
<option value="Commerçant">Commerçant</option>
<option value="Restaurateur">Restaurateur</option>
<option value="Autre">Autre</option>

	</select>
</div>
<div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group text-white">
    <div class="content__gdpr">
        <h2 class="text-white">Autorisations de communication</h2>
        <p>Pour quel(s) type(s) de communication souhaitez-vous être contacté par Sheaft ?</p>
        <br/>
        <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
		    <label class="checkbox subfield" for="gdpr_66162"><input type="checkbox" id="gdpr_66162" name="gdpr[66162]" value="Y" class="av-checkbox gdpr"><span>Newsletter</span> </label><label class="checkbox subfield" for="gdpr_66174"><input type="checkbox" id="gdpr_66174" name="gdpr[66174]" value="Y" class="av-checkbox gdpr"><span>Email promotionel</span> </label>
        </fieldset>
        <br/>
        <p>Vous pouvez vous désabonner à n'importe quel moment en cliquant sur le lien dans le bas de page des emails que vous recevrez de notre part.</p>
    </div>
    <br/>
    <div class="content__gdprLegal">
        <p>Nous utilisons Mailchimp comme plateforme d'emailing. En cliquant sur le bouton s'inscrire, vous acceptez que vos informations soient transmises à Mailchimp pour traiter votre inscription. <a href="https://mailchimp.com/legal/" class="text-accent" target="_blank">Cliquez sur ce lien pour en savoir plus.</a></p>
    </div>
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a2e9bef717a56b12586cdbf76_e1b8d283f5" tabindex="-1" value=""></div>
    <div class="clear">
    <div class="flex flex-wrap justify-center">
      <button type="submit" value="S'inscrire" name="subscribe" id="mc-embedded-subscribe" class="hover:underline bg-white font-bold rounded-full
      my-3 py-4 px-8 shadow-lg md:text-xl">S'inscrire</button></div>
    </div></div>
  </div>
</div>
</form>
</div>
<a href="/interest" style="display: none;">Intérêt</a>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='KIND';ftypes[5]='dropdown'; /*
 * Translated default messages for the $ validation plugin.
 * Locale: FR
 */
$.extend($.validator.messages, {
        required: "Ce champ est requis.",
        remote: "Veuillez remplir ce champ pour continuer.",
        email: "Veuillez entrer une adresse email valide.",
        url: "Veuillez entrer une URL valide.",
        date: "Veuillez entrer une date valide.",
        dateISO: "Veuillez entrer une date valide (ISO).",
        number: "Veuillez entrer un nombre valide.",
        digits: "Veuillez entrer (seulement) une valeur numérique.",
        creditcard: "Veuillez entrer un numéro de carte de crédit valide.",
        equalTo: "Veuillez entrer une nouvelle fois la même valeur.",
        accept: "Veuillez entrer une valeur avec une extension valide.",
        maxlength: $.validator.format("Veuillez ne pas entrer plus de {0} caractères."),
        minlength: $.validator.format("Veuillez entrer au moins {0} caractères."),
        rangelength: $.validator.format("Veuillez entrer entre {0} et {1} caractères."),
        range: $.validator.format("Veuillez entrer une valeur entre {0} et {1}."),
        max: $.validator.format("Veuillez entrer une valeur inférieure ou égale à {0}."),
        min: $.validator.format("Veuillez entrer une valeur supérieure ou égale à {0}.")
});}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
  </div>
</section>

<style>
  .custom-select {
    height: 62px;
    color: #a0aec1;
  }
  
  @media (max-width: 1024px) {
    
    .custom-select {
      height: 56px;
    }
    
    .map-module {
      transition: 0.3s all ease-in-out;
      transform: translateY(-100%);
    }

    .map-module.active {
      transform: translateY(0);
    }
  }

  #association svg {
    width: 30px;
    fill: #009689;
    height: 30px;
  }

  #features svg {
    width: 30px;
    fill: #ffffff;
    height: 30px;
  }


  @media (min-width: 1024px) {

    #features .feature-element div {
      max-width: 500px;
    }
  }
</style>
