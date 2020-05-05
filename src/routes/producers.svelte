<svelte:head>
  <title>Producteurs</title>
</svelte:head>

<div class="relative bg-white overflow-hidden landing">
  <div class="max-w-screen-xl mx-auto ">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:h-screen">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      <div class="jumbo pt-24 mx-auto max-w-screen-xl px-4 sm:mt-11 sm:px-6 md:mt-15 lg:mt-19 lg:px-4 xl:mt-27 lg:pr-16">
        <div class="sm:text-center lg:text-left">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl" style="
              border-bottom: 6px solid #34d7a3;
              margin-bottom: 1em;
              padding-bottom: 1em;
          ">Je suis <span class="text-primary">producteur</span>.</h2>
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl">
            J’ai besoin d’un outil qui me permette de 
            <br class="xl:hidden" />
            <span class="text-primary">passer plus de temps avec ma famille.</span>
          </h2>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            -Benoit, producteur du GAEC La Ferme du Parquet
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1503639595033-c11290f0accf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80" alt="" />
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
          Regrouper vos commandes pour limiter les erreurs
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Traitez vos commandes à un seul et même endroit. Terminé les prises de commande par téléphone, les modifications par email : toutes vos commandes apparaissent en temps réel dans votre espace.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-16 xl:mb-8">
      <div class="md:mr-16 xl:mr-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-4 md:mt-0"> 
            Gagner en visibilité pour augmenter vos ventes
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Les consommateurs vous trouveront plus facilement et pourront immédiatement connaître vos produits et vos stocks. Ils seront donc plus enclin à acheter vos produits et ce en plus grande quantité.
        </p>
      </div>
      <div class="relative w-full" style="height: 300px; background-image: url('img/blob-shape-2.svg'); background-size: contain; background-position: center; background-repeat: no-repeat;">
        <img style="top: 10%; width:300px;" class="absolute shadow" src="/img/shops/search.jpg" alt="Trouvé" />  
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-16 xl:mb-8 mt-16 md:mt-0
      md:mt-16 lg:mt-0">
      <div class="relative w-full" style="height: 300px; background-image: url('img/blob-shape-3.svg'); background-size: contain; background-position: center; background-repeat: no-repeat;">
        <img style="top: 30%;" class="absolute shadow" src="/img/producer/automate.jpg" alt="Trouvé" />  
      </div>
      <div class="md:ml-16 xl:ml-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-4 md:mt-0">
          Automatiser pour vous faire gagner du temps
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Génération de bons de préparation, bons de livraison, factures, vous n’avez qu’à donner les ordres et nos algorithmes s’occuperont de tout. Tout a été pensé pour vous faire gagner un maximum de temps pour que vous puissiez vous concentrer sur les choses importantes.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-16 xl:mb-8">
      <div class="md:mr-16 xl:mr-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8 md:mt-10">
            Connaître l’avis de vos clients pour améliorer la qualité de vos produits
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Consultez les avis de vos clients sur tous vos produits pour comprendre ceux qu’ils préfèrent et pourquoi. Améliorez vos produits pour satisfaire vos clients et augmenter vos ventes.
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