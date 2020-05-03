<svelte:head>
  <title>Commerçants</title>
</svelte:head>

<div class="relative bg-white overflow-hidden landing lg:flex" style="max-height: 100vh;">
  <div class="lg:inset-y-0 lg:w-1/2 hidden lg:block">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1535202610320-919f9b13de77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" alt="" />
  </div>
  <div class="max-w-screen-xl mx-auto w-full lg:w-1/2">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 h-full">
      <svg class="hidden lg:block absolute inset-y-0 h-full w-48 text-white transform translate-x--1/2" style="left: -184px;" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="50,0 100,0 50,2000 0,100" />
      </svg>
      <div class="jumbo pt-24 mx-auto max-w-screen-xl px-4 sm:mt-11 sm:px-6 md:mt-15 lg:mt-19 lg:px-4 xl:mt-27 lg:pr-16">
        <div class="sm:text-center lg:text-left">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl" style="
              border-bottom: 6px solid #34d7a3;
              margin-bottom: 1em;
              padding-bottom: 1em;
          ">Je suis <span class="text-primary">commerçant</span>.</h2>
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl">
            J’ai besoin d’un outil qui
            <br class="xl:hidden" />
            <span class="text-primary">facilite mes échanges avec les producteurs.</span>
          </h2>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            -Ophélie, directrice Biocoop Semnoz
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bg-white text-center px-6 lg:px-64 pt-24">
  <h2 class="text-4xl tracking-tight text-center leading-10 font-extrabold sm:text-4xl sm:leading-none md:text-5xl py-16 bg-primary text-white">
    BIEN COMPRIS !
  </h2>
</div>

<div id="missions" class="relative bg-white">
  <div class="container mx-auto px-6 py-16 relative">
    <div
      class="flex flex-col md:flex-row items-center mb-16 xl:mb-8 mt-16 md:mt-0
      md:mt-16 lg:mt-0">
      <div class="relative w-full" style="height: 300px; background-image: url('img/blob-shape.svg'); background-size: contain; background-position: center; background-repeat: no-repeat;">
        <img style="top: 30%;" class="absolute shadow" src="/img/producer/central.jpg" alt="Trouvé" />  
      </div>
      <div class="md:ml-16 xl:ml-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-4 md:mt-0">
          Passez des commandes simplement et à un seul endroit
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Mon mail est-il bien parti ? A quelle heure est-ce que je pourrais l’appeler ? A-t-il du stock ? Terminé toutes ces questions, maintenant vos commandes peuvent être passées n’importe quand et en quelques clics seulement.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-16 xl:mb-8">
      <div class="md:mr-16 xl:mr-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-4 md:mt-0"> 
            Suivez vos commandes en temps réel
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Gardez un oeil sur vos commandes et sur leur statut. Un problème de livraison ? Vous le saurez. Un imprévu ? Annulez facilement et le producteur sera automatiquement notifié.
        </p>
      </div>
      <div class="relative w-full" style="height: 300px; background-image: url('img/blob-shape-3.svg'); background-size: contain; background-position: center; background-repeat: no-repeat;">
        <img style="top: 40%;" class="absolute shadow" src="/img/shops/suivi.jpg" alt="Trouvé" />  
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-16 xl:mb-8 mt-16 md:mt-0
      md:mt-16 lg:mt-0">
      <div class="relative w-full" style="height: 300px; background-image: url('img/blob-shape-2.svg'); background-size: contain; background-position: center; background-repeat: no-repeat;">
        <img style="top: 20%;" class="absolute shadow" src="/img/producer/1.png" alt="Trouvé" />  
      </div>
      <div class="md:ml-16 xl:ml-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-4 md:mt-0">
          Trouvez de nouveaux producteurs
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Il y a des centaines de producteurs autour de vous et il est normal de ne pas tous les connaître. Sheaft vous permet de les trouver facilement et plus encore, de connaître leur catalogue en un coup d’oeil.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-16 xl:mb-8">
      <div class="md:mr-16 xl:mr-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8 md:mt-10">
            Découvrez les produits qui marchent le mieux
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Sur notre plateforme, les consommateurs peuvent noter les produits des producteurs. Utilisez leurs avis pour identifier les produits les plus appréciés et augmenter vos ventes.
        </p>
      </div>
      <div class="relative w-full" style="height: 300px; background-image: url('img/blob-shape-4.svg'); background-size: contain; background-position: center; background-repeat: no-repeat;">
        <img style="top: 20%;" class="absolute shadow" src="/img/producer/avis.jpg" alt="Trouvé" />  
      </div>
    </div>
  </div>
</div>

<style>

.landing {
  margin-top: 52px;
}

@media (min-width: 1024px) {
  .landing {
    margin-top: 72px;
  }
}

@media (min-width: 1024px) {
  .jumbo {
    padding-top: 13rem !important;
  }
}
</style>