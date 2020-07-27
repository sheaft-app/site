<svelte:head>
  <title>Sheaft - Je suis producteur</title>
</svelte:head>

<div class="relative bg-white overflow-hidden landing">
  <div class="max-w-screen-xl mx-auto ">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:h-screen">
      <div class="hidden lg:block">
        <svg class=" absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
      <div class="jumbo pt-24 mx-auto max-w-screen-xl px-4 sm:mt-11 sm:px-6 md:mt-15 lg:mt-19 lg:px-4 xl:mt-27 lg:pr-16">
        <div class="sm:text-center lg:text-left">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl" style="
              border-bottom: 6px solid #009688;
              margin-bottom: 1em;
              padding-bottom: 1em;
          ">Je suis <span class="text-primary">producteur</span>.</h2>
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl">
            J’ai besoin d’un outil qui me permette de 
            <br class="xl:hidden" />
            <span class="text-primary">passer plus de temps avec ma famille.</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="./img/producers.jpg" alt="" />
  </div>
</div>

<div id="features" class="relative bg-white">
  <div class="container mx-auto px-6 py-6 relative">
    <h4
      class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
      Ce que Sheaft peut vous apporter
      <span class="bg-primary h-1 w-20 block mt-4" />
    </h4>
    <div
      class="flex flex-col md:flex-row items-center mb-6 xl:mb-8 mt-6 md:mt-0
      md:mt-16 lg:mt-0">
      <div class="relative w-full hidden lg:block" style="height: 300px; background-image: url('img/blob-shape.svg'); background-size: contain; background-position: center; background-repeat: no-repeat;">
        <img style="top: 30%;" class="absolute shadow" src="/img/producer/central.jpg" alt="Trouvé" />  
      </div>
      <div class="md:ml-16 xl:ml-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
          Regrouper vos commandes pour limiter les erreurs
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Traitez vos commandes en un seul et même endroit. Terminé les prises de commande par téléphone, les modifications par email : toutes vos commandes apparaissent en temps réel dans votre espace.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-6 xl:mb-8">
      <div class="md:mr-16 xl:mr-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
            Gagner en visibilité pour augmenter vos ventes
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Grâce à Sheaft, les consommateurs ont un accès direct aux producteurs autour d’eux. Ils vous trouveront donc plus facilement et pourront immédiatement découvrir et commander vos produits. 
        </p>
      </div>
       <img src="/img/1.jpg" class="md:w-1/3 hidden lg:block" alt="Trouvez" />
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-6 xl:mb-8 mt-6 md:mt-0
      md:mt-16 lg:mt-0">
      <div class="relative w-full hidden lg:block" style="height: 300px; background-image: url('img/blob-shape-3.svg'); background-size: contain; background-position: center; background-repeat: no-repeat;">
        <img style="top: 30%;" class="absolute shadow" src="/img/producer/automate.jpg" alt="Trouvé" />  
      </div>
      <div class="md:ml-16 xl:ml-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
          Automatiser pour vous faire gagner du temps
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Génération de bons de préparation, bons de livraison, factures, vous n’avez qu’à donner les ordres et nos algorithmes s’occuperont de tout. Tout est pensé pour vous faire gagner un maximum de temps afin que vous puissiez vous concentrer sur l'essentiel.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-6 xl:mb-8">
      <div class="md:mr-16 xl:mr-32 lg:px-24">
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
            Connaître l’avis de vos clients pour améliorer la qualité de vos produits
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Consultez les avis de vos clients pour comprendre ce qu’ils aiment ou non dans vos produits afin de vous aider à les améliorer.
        </p>
      </div>
      <img src="/img/4.jpg" class="md:w-1/3 hidden lg:block" alt="Evaluations" />
    </div>
  </div>
</div>

<div id="contact" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-6 relative text-center">
    <h1 class="text-3xl font-bold lg:pt-0 text-center">Vous avez une question ?</h1>
    <span class="bg-primary h-1 w-20 block mt-4 mb-4 text-center m-auto" />
    <p class="mb-2">Ça nous ferait super plaisir de répondre à toutes vos questions sur Sheaft.</p>
    <p class="mb-2">N'hésitez pas à rejoindre notre Discord, nous essayons de répondre le plus rapidement possible.</p>
    <a href="https://discord.gg/nur5Aem" target="_blank">
      <img src="img/discord.png" class="m-auto" style="max-width: 200px;" alt="Rejoindre notre Discord" />
    </a>
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