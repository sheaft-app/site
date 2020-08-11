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
            <span class="text-primary">passer plus de temps avec ma famille</span>.
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
      class="text-2xl md:text-4xl font-bold mb-8 mt-4 md:mt-0">
      Ce que Sheaft peut vous apporter
      <span class="bg-primary h-1 w-20 block mt-4" />
    </h4>
    <div class="flex flex-col-reverse md:flex-row items-center mb-6 xl:mb-8">
      <div class="lg:mr-16 xl:mr-32">
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
            Gagner en visibilité pour augmenter vos ventes
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Grâce à Sheaft, les consommateurs ont un accès direct aux producteurs autour d’eux. Ils vous trouveront donc plus facilement et pourront immédiatement découvrir et commander vos produits. 
        </p>
      </div>
       <img src="/img/1.jpg" class="md:w-1/2 hidden lg:block" alt="Trouvez" />
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-6 xl:mb-8 mt-6 md:mt-0
      md:mt-16 lg:mt-0">
      <img src="/img/producer/commandes.jpg" class="md:w-1/2 hidden lg:block" alt="Panel de commandes" />
      <div class="lg:ml-16 xl:ml-32">
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
      <div class="lg:mr-16 xl:mr-32">
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
          Importer directement vos produits pour aller à l'essentiel
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Ne perdez pas de temps à importer chacun de vos produits. Remplissez notre fichier Excel d’exemple avec votre catalogue et notre algorithme s’occupera de créer vos produits pour vous.
        </p>
      </div>
      <img src="/img/producer/import.jpg" class="md:w-1/2 hidden lg:block" alt="Importez vos produits" />
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-6 xl:mb-8 mt-6 md:mt-0
      md:mt-16 lg:mt-0">
      <img src="/img/producer/ventes.jpg" class="md:w-1/2 hidden lg:block" alt="Gérez vos consignes" />
      <div class="lg:ml-16 xl:ml-32">
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
          Renseigner vos points de vente pour gagner en flexibilité
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
           Vous vendez à la ferme ? Au marché aussi ? Et même à un magasin de producteurs ? Aucun problème. Renseignez chacun de vos points de vente et leurs horaires, les clients pourront choisir où récupérer leurs commandes.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-6 xl:mb-8">
      <div class="lg:pr-64">
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
            Connaître l’avis de vos clients pour améliorer la qualité de vos produits
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Consultez les avis de vos clients pour comprendre ce qu’ils aiment ou non dans vos produits afin de vous aider à les améliorer.
        </p>
      </div>
      <img src="/img/4.jpg" class="md:w-1/4 hidden lg:block" alt="Evaluations" />
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-6 xl:mb-8 mt-6 md:mt-0
      md:mt-16 lg:mt-0">
      <img src="/img/producer/consignes.jpg" class="md:w-1/2 hidden lg:block" alt="Gérez vos consignes" />
      <div class="lg:ml-16 xl:ml-32">
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
          Marquer vos produits consignés pour les mettre en valeur
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
           Certains de vos produits sont vendus consignés ? On gère ça ! Ajoutez vos consignes et reliez les produits concernés en un clic. Les produits seront marqués par un icône 
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512" width="20px" class="ml-1 mr-1"><g><path d="m212 367h89c33.085938 0 60-26.914062 60-60v-43.402344c9.128906-1.851562 16-9.921875 16-19.597656v-70c0-11.046875-8.953125-20-20-20h-201c-11.046875 0-20 8.953125-20 20v70c0 9.675781 6.871094 17.746094 16 19.597656v43.402344c0 33.085938 26.914062 60 60 60zm89-40h-89c-11.027344 0-20-8.972656-20-20v-41h46v8c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-8h43v41c0 11.027344-8.972656 20-20 20zm-125-133h161v30h-161zm-176-60v-48c0-11.046875 8.953125-20 20-20s20 8.953125 20 20v32.535156c19.679688-30.890625 45.8125-57.316406 76.84375-77.445312 41.4375-26.878906 89.554688-41.089844 139.15625-41.089844 68.378906 0 132.667969 26.628906 181.019531 74.980469 48.351563 48.351562 74.980469 112.640625 74.980469 181.019531 0 11.046875-8.953125 20-20 20s-20-8.953125-20-20c0-119.101562-96.898438-216-216-216-75.664062 0-145.871094 40.15625-184.726562 104h26.726562c11.046875 0 20 8.953125 20 20s-8.953125 20-20 20h-48c-27.570312 0-50-22.429688-50-50zm512 244v47c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-33.105469c-19.789062 31.570313-46.289062 58.542969-77.84375 79.011719-41.4375 26.882812-89.554688 41.09375-139.15625 41.09375-68.339844 0-132.464844-26.644531-180.5625-75.023438-48-48.285156-74.4375-112.554687-74.4375-180.976562 0-11.046875 8.953125-20 20-20s20 8.953125 20 20c0 119.101562 96.449219 216 215 216 75.667969 0 145.871094-40.15625 184.726562-104h-26.726562c-11.046875 0-20-8.953125-20-20s8.953125-20 20-20h49c27.570312 0 50 22.429688 50 50zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#205164"/></g> </svg>
          dans la recherche des consommateurs.
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-6 xl:mb-8">
      <div class="lg:mr-16 xl:mr-32">
        <h4
          class="text-2xl md:text-3xl font-medium mb-4 mt-4 md:mt-0">
            Trouver de nouveaux partenaires pour étendre votre activité
        </h4>
        <p class="text-gray-600 text-lg font-light mb-4">
          Vous souhaitez aussi échanger avec des professionnels ? Définissez vos horaires de livraison et trouvez des commerçants autour de vous. Traitez leurs commandes en un clin d’oeil !
        </p>
      </div>
      <img src="/img/producer/accords.jpg" class="md:w-1/2 hidden lg:block" alt="Gérez vos accords" />
    </div>
  </div>
</div>

<div id="contact" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-6 relative text-center">
    <h1 class="text-3xl font-bold lg:pt-0 text-center">Vous avez une question ?</h1>
    <span class="bg-primary h-1 w-20 block mt-4 mb-4 text-center m-auto" />
    <p class="mb-2">Ça nous ferait super plaisir de répondre à toutes vos questions sur Sheaft.</p>
    <p class="mb-2">N'hésitez pas à rejoindre notre Discord, nous essayons de répondre le plus rapidement possible.</p>
    <a href="https://discord.gg/FGSg6Wm" target="_blank">
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