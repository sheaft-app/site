<script>
  import qs from "qs";
  import { onMount } from "svelte";
  import { mapActive } from "../stores";
  import Map from "../components/Map.svelte";
  let error = null;

  onMount(() => {
    error = qs.parse(window.location.search.slice(1))["error"];
  });

  const showMap = () => {
    mapActive.set(true);

    document.body.classList.add("overflow-hidden");
  };
</script>

<svelte:head>
  <title>Accueil</title>
</svelte:head>

<div class="pt-16 md:pt-24">
  <div
    class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row
    items-center text-white pb-12 md:p-16 md:p-0">
    <!--Left Col-->
    <div
      class="flex flex-col w-full md:w-2/5 justify-center items-start text-left">
      <!-- <p class="uppercase tracking-loose w-full">un petit texte</p> -->
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
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800
          font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          href="https://app.sheaft.com"
          target="_blank">
          Lancer l'application
        </a>
        <a
          href="#introduction"
          class="mx-auto hover:underline text-white font-bold self-center
          lg:ml-2">
          En savoir plus
        </a>
      </div>

    </div>
    <!--Right Col-->
    <div class="hidden md:block w-full md:w-3/5 py-6 text-center">
      <img
        class="w-full md:w-4/5 z-50"
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
  <div class="container mx-auto px-6 py-6 md:py-24 relative">
    <div
      class="flex flex-col md:flex-row items-center mb-16 xl:mb-8 mt-16 md:mt-0
      md:mt-16 lg:mt-0">
      <img
        src="/img/easy.svg"
        class="md:w-1/3"
        alt="consommer local difficil" />
      <div class="md:ml-16 xl:ml-32">
        <h4
          class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-4 md:mt-0">
          Consommer local, du parcours d'obstacle à la promenade de santé
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-xl mb-4">
          Vous voulez aider les agriculteurs de votre région, améliorer leur
          rémunération et leurs conditions de travail et participer à la lutte
          contre le réchauffement climatique.
        </p>
        <!-- <p class="text-gray-600 text-xl mb-4">Il y a plein de producteurs autour de votre maison, que vous soyez en Île-de-France ou en Ardèche. Pourtant, c'est un effort de les trouver et d'acheter leurs produits.</p> -->
        <p class="text-gray-600 text-xl mb-4">
          Pourtant, il est plus compliqué d'acheter un yaourt produit à 20km de
          chez vous qu'un avocat produit au Mexique.
        </p>
        <!-- <p class="text-gray-600 text-xl mb-4">700km pour amener des légumes que nous pouvons presque aller chercher à vélo sur le lieu de production ? Non merci.</p> -->
        <p class="text-gray-600 text-xl mb-4">
          Il est temps de changer les choses.
        </p>
      </div>
    </div>
  </div>
</div>

<div id="process" class="relative bg-gray-100">
  <div class="container mx-auto px-6 py-12 pb-12 relative">
    <h3
      class="flex flex-col items-center text-3xl md:text-4xl text-secondary
      font-bold mb-12">
      Une consommation en 3 étapes
      <span class="bg-primary h-1 w-20 block mt-4" />
    </h3>
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col items-center md:px-6 lg:px-12">
        <span class="text-6xl text-primary">1</span>
        <h4 class="font-semibold text-2xl text-gray-800 mb-2">Rechercher</h4>
        <p class="text-center text-gray-600 text-xl leading-relaxed">
          Sheaft affiche tous les produits de tous les producteurs
          <b>autour de vous</b>
          . Vous n'avez qu'à faire vos emplettes !
        </p>
      </div>
      <div class="flex flex-col items-center md:px-6 lg:px-12">
        <span class="text-6xl text-primary">2</span>
        <h4 class="font-semibold text-2xl text-gray-800 mb-2">Récupérer</h4>
        <p class="text-center text-gray-600 text-xl leading-relaxed">
          Une fois votre commande prête, vous êtes notifié par le producteur.
          C'est l'heure d'aller la chercher !
        </p>
      </div>
      <div class="flex flex-col items-center md:px-6 lg:px-12">
        <span class="text-6xl text-primary">3</span>
        <h4 class="font-semibold text-2xl text-gray-800 mb-2">Accumuler</h4>
        <p class="text-center text-gray-600 text-xl leading-relaxed">
          A mesure que vous utilisez l'application, vous gagnez des points et
          faites aussi gagner des points à votre région.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="block lg:hidden bg-white container mx-auto px-6 py-16 relative">
  <h4 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-8 md:mt-10">
    Consommez local, gagnez des cadeaux !
    <span class="bg-primary h-1 w-20 block mt-4" />
  </h4>
  <p class="text-gray-600 text-xl mb-4">
    Quand on fait quelque chose de bien, il est normal d'être récompensé.
  </p>
  <p class="text-gray-600 text-xl mb-4">
    Sur Sheaft, chacune de vos actions vous rapporte des points : un achat, un
    avis sur un produit, un partage sur les réseaux... toutes ces actions qui
    aident à faire connaître et améliorer les conditions de travail de nos
    producteurs.
  </p>
  <p class="text-gray-600 text-xl mb-4">
    Tous les mois, nous établissons des partenariats avec des artisans et
    producteurs de votre région qui proposeront des cadeaux aux membres ayant le
    plus de points.
  </p>
  <p class="text-gray-600 text-xl mb-4">
    Votre position sera, avec votre accord, visible de tous en temps réel. Vous
    êtes un consommateur éthique et responsable, vous pouvez être fier !
  </p>
  <button
    style="background-color: #33D7A3;"
    class="hover:underline text-white font-bold rounded-full py-4 px-8 shadow-lg
    md:text-xl"
    on:click={showMap}>
    Montrez moi la carte !
  </button>
</div>

<div
  class="fixed lg:static map-module bottom-0 w-full z-10"
  class:active={$mapActive}>
  <Map />
</div>

<div id="missions" class="relative bg-white">
  <div class="container mx-auto px-6 py-16 relative">
    <div
      class="flex flex-col md:flex-row items-center mb-16 xl:mb-8 mt-16 md:mt-0
      md:mt-16 lg:mt-0">
      <img
        src="/img/pushing_forward.svg"
        class="md:w-1/3"
        alt="mettre en avant" />
      <div class="md:ml-16 xl:ml-32">
        <h4
          class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-4 md:mt-0">
          Mettre en avant les produits locaux
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-xl mb-4">
          Pour répondre à cette problématique, nous mettons à disposition un
          outil performant qui permet de rechercher efficacement des produits
          autour de soi.
        </p>
        <p class="text-gray-600 text-xl mb-4">
          Chaque produit s'accompagne d'une jauge de proximité colorée allant de
          vert pour très proche à orange foncé pour très loin.
        </p>
        <p class="text-gray-600 text-xl mb-4">
          La transparence est très importante pour nous et trouver le lieu de
          production d'un produit ne doit pas demander plus qu'un coup d'oeil
          sur une étiquette.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-16 xl:mb-8">
      <div class="md:mr-16 xl:mr-32">
        <h4
          class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-4 md:mt-0">
          Soutenir nos producteurs
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-xl mb-4">
          Pour Sheaft, améliorer les conditions de travail et de rémunération
          des producteurs est une affaire de famille.
        </p>
        <p class="text-gray-600 text-xl">
          Nous nous efforçons chaque jour de trouver de nouvelles idées pour que
          leurs produits soient plus visibles, et plus facilement accessibles
          aux commerces et aux consommateurs.
        </p>
      </div>
      <img src="/img/soutenir.svg" class="md:w-1/3" alt="soutenez-les" />
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-16 xl:mb-8 mt-16 md:mt-0
      md:mt-16 lg:mt-0">
      <img src="/img/cooking.svg" class="md:w-1/3" alt="cuisinez" />
      <div class="md:ml-16 xl:ml-32">
        <h4
          class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-4 md:mt-0">
          Réduire le gaspillage
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-xl mb-4">
          Parfois, certains paniers ne seront pas récupérés par les
          consommateurs. Mais nous n'allons certainement pas gâcher tous ces
          bons produits.
        </p>
        <p class="text-gray-600 text-xl mb-4">
          Le panier rejoindra la carte Sheaft et chaque consommateur pourra
          sélectionner ces paniers perdus.
        </p>
        <p class="text-gray-600 text-xl mb-4">
          Les producteurs pourront même afficher des invendus et des produits
          proche de leur date limite de consommation. Et oui, les légumes en fin
          de vie font de très bonnes soupes !
        </p>
      </div>
    </div>
  </div>
</div>

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
            class="flex flex-col text-3xl md:text-4xl text-gray-800 font-bold
            mb-6 mt-4 md:mt-0">
            Une idée née à la ferme
            <span class="bg-primary h-1 w-20 block mt-4" />
          </h3>
          <p class="text-xl text-gray-700 mb-4">
            Sheaft est littéralement né dans une ferme, plus précisément au sein
            du GAEC La Ferme du Parquet en Haute-Savoie.
          </p>
          <p class="text-xl text-gray-700 mb-4">
            Un jour que leur frère leur fait part de ses problèmes en tant que
            producteur de yaourts, les développeurs et futurs co-fondateurs de
            Sheaft, Noël et Geoffrey, font le constat que ces problèmes peuvent
            être résolus à l'aide d'une plateforme unique regroupant tous les
            acteurs concernés.
          </p>
          <p class="text-xl text-gray-700 mb-4">
            Leur défi ? Briser les barrières de la consommation locale, pour
            faciliter ce mode d'achat.
          </p>
          <div class="my-8">
            <a
              class="hover:underline bg-white text-gray-800 font-bold
              rounded-full py-4 px-8 shadow-lg text-xl ml-2"
              href="/about"
              target="_blank">
              En savoir plus
            </a>
          </div>
        </div>
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
    Restons en contact !
  </h1>
  <div class="w-full mb-4">
    <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
  </div>
  <h3
    class="my-4 md:my-8 text-xl md:text-3xl leading-tight text-white px-3
    md:px-0">
    Pour rester informé de toutes nos avancées, inscrivez-vous à notre
    newsletter
  </h3>
  <div class="items-center w-full px-4 pb-6">
    <form
      method="POST"
      action="https://functions.sheaft.com/api/CreateContactCommand?code=oamUmnFWNVSRlfaMke7a/mAVIkaUr19iCapj9/7YX0zkPUnrGDCUFQ==">
      <div class="flex flex-wrap my-8 justify-center">
        <div class=" w-full md:w-6/12">
          <div class="w-full md:pr-2 text-left">
            <label class="font-semibold text-white md:text-xl">Prénom*</label>
            <input
              class="w-full bg-white text-gray-800 font-bold rounded my-2 py-4
              px-3 shadow-lg md:text-xl"
              id="FirstName"
              name="FirstName"
              type="FirstName"
              required="required"
              placeholder="jean" />
          </div>
          <div class="w-full text-left">
            <label class="font-semibold text-white md:text-xl">
              Adresse e-mail*
            </label>
            <input
              class="w-full bg-white text-gray-800 font-bold rounded my-2 py-4
              px-3 shadow-lg md:text-xl"
              id="Email"
              type="Email"
              name="Email"
              required="required"
              placeholder="jean@doe.xyz" />
          </div>
          <div class="w-full text-left">
            <label class="font-semibold text-white md:text-xl">Je suis*</label>
            <select
              class="w-full bg-white text-gray-800 font-bold rounded my-2 py-4
              px-3 shadow-lg md:text-xl"
              id="Role"
              type="Role"
              name="Role"
              required="required">
              <option></option>
              <option value="consumer">Consommateur</option>
              <option value="producer">Producteur</option>
              <option value="shop">Commerçant</option>
              <option value="restorer">Restaurateur</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <p class="w-full text-white text-left pt-4">(*) champs requis</p>
          {#if error}
            <p class="w-full text-red-600 text-xl">{error}</p>
          {/if}
        </div>
      </div>
      <button
        type="submit"
        class="hover:underline bg-white text-gray-800 font-bold rounded-full
        my-3 py-4 px-8 shadow-lg md:text-xl">
        Je m'inscris à la newsletter
      </button>
    </form>
  </div>
</section>

<style>
  @media (max-width: 1024px) {
    .map-module {
      transition: 0.3s all ease-in-out;
      transform: translateY(-100%);
    }

    .map-module.active {
      transform: translateY(0);
    }
  }
</style>
