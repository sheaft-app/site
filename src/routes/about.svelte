<svelte:head>
  <title>Sheaft - A propos</title>
</svelte:head>

<script>
const ideas = [
  {
    title: "Point de retrait",
    content: "Créer des points de retrait pour limiter les déplacements"
  },
  {
    title: "Livraison participative",
    content: "Votre voisin commande aussi ? Regroupez votre commande !"
  },
  {
    title: "Carte des invendus",
    content: "Localisez rapidement des invendus à la ferme"
  },
  {
    title: "Jardins particuliers",
    content: "Vendez le surplus de votre propre potager"
  },
  {
    title: "Cagnotte producteur",
    content: "Finançons les projets des producteurs"
  },
  {
    title: "Demander un coup de main",
    content: "Les patates à ramasser ? Les foins ? Demandez un coup de main aux bénévoles !"
  },
  {
    title: "Proposer de l'artisanat",
    content: "Le local, c'est bien plus que de la nourriture"
  }
]
</script>

<div class="relative bg-white overflow-hidden landing lg:flex">
  <div class="max-w-screen-xl mx-auto w-full lg:w-1/2">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 h-full mx-auto px-6">
      <svg class="hidden lg:block absolute inset-y-0 h-full w-48 text-white transform translate-x--1/2" style="left: -184px;" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="50,0 100,0 50,2000 0,100" />
      </svg>
      <div class="jumbo pt-24 mx-auto max-w-screen-xl sm:mt-11 md:mt-15 lg:mt-19 xl:mt-20">
        <div class="text-center">
          <img src="./img/roundedsheaft.png" class="m-auto" style="width: 80px; height: 70px; margin-bottom: 25px;" />
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl" style="
              border-bottom: 6px solid #009688;
              margin-bottom: 1em;
              padding-bottom: 1em;
          ">Nous sommes <span class="text-primary">Sheaft</span>.</h2>
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl">
            Nous avons l'ambition de 
            <br class="xl:hidden" />
            <span class="text-primary">remanier la consommation locale.</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="missions" class="relative bg-white pt-12">
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
          class="text-2xl md:text-3xl font-semibold mb-4 mt-4 md:mt-0">
          Simplifier l’accès à la consommation responsable
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Pourquoi est-il plus facile d’acheter un avocat au Mexique qu’un yaourt produit à 20km de chez soi ?
        </p>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Sheaft, c’est la volonté d’inverser cette tendance. Mieux manger ne devrait pas impliquer un travail d’investigation fastidieux, 
          ça devrait être un réflexe. 
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-16 xl:mb-8">
      <div class="md:mr-16 xl:mr-32">
        <h4
          class="text-2xl md:text-3xl font-semibold mb-4 mt-4 md:mt-0">
          Soutenir nos producteurs et l'économie locale
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Les producteurs font un travail sans lequel nous ne pourrions vivre. Nous ne pouvons pas leur tourner le dos.
        </p>
        <p class="text-xl text-gray-600 font-light">
          Mettons en valeur la production locale produite dans des conditions optimales pour l’humain et pour la terre,
          rémunérons correctement les producteurs et réduisons l’impact financier des intermédiaires sur la chaîne.
        </p>
      </div>
      <img src="/img/soutenir.svg" class="md:w-1/3" alt="soutenez-les" />
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-16 xl:mb-8 mt-16 md:mt-0
      md:mt-16 lg:mt-0">
      <img src="/img/valorize.svg" class="md:w-1/3" alt="cuisinez" />
      <div class="md:ml-16 xl:ml-32">
        <h4
          class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
          Innover dans le sens de l’humain et de l’écologie
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Jamais dans le sens du profit.
        </p>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Il est possible de proposer des outils pratiques et innovants sans avoir à chercher un
           « business model scalable et replicable » qui ouvre la voie à une « croissance exponentielle » et à devenir une licorne « disruptive ».
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-16 xl:mb-8">
      <div class="md:mr-16 xl:mr-32">
        <h4
          class="text-2xl md:text-3xl font-semibold mb-4 mt-4 md:mt-0">
          Anticiper pour avoir la force de réagir
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light">
          Les dégâts engendrés par ceux de la dernière crise sanitaire de 2020 ont été colossaux pour nous tous. 
          Si la science nous dit que c’est une première crise, la raison impose de tout faire pour combattre 
          l’apparition des prochaines et de réduire au maximum leur impact si elles venaient à se produire.
        </p>
        <p class="text-xl text-gray-600 font-light">
         En créant Sheaft, nous voulions développer un outil qui soit basé sur un modèle résilient, 
         c’est-à-dire qui soit le moins possible dépendant des fluctuations économiques. 
         En période de crise, nous ne chercherons pas à sauver notre croissance mais à protéger les intérêts de toute notre communauté.
        </p>
      </div>
      <img src="/img/soutenir.svg" class="md:w-1/3" alt="Anticipons" />
    </div>
  </div>
</div>

<div id="story" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-6 relative">
    <div class="flex items-center h-auto flex-wrap lg:mx-auto -mx-6">
      <h4 class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0 px-3 lg:px-0">
        La petite histoire
        <span class="bg-primary h-1 w-20 block mt-4" />
      </h4>
      <div class="p-4 md:p-12">
        <p class="mb-2">A la base, on voulait faire une start-up.</p>
        <p class="mb-2">En septembre 2019, on avait commencé à travailler sur les prémices de l’outil Sheaft, 
        on avait réfléchi à un modèle économique viable, fait des recherches sur toutes nos charges d’infrastructure,
        établi des Excel pour calculer notre rentabilité, etc… on ressemblait vraiment à une start-up. 
        Mais on a fini par perdre en motivation en décembre sans vraiment savoir pourquoi.</p>
        <p class="mb-2">Quand le confinement de mars 2020 apparaît, la demande en local explose pour éviter les files d’attentes 
        et par solidarité envers les producteurs. En trois semaines, des dizaines d’acteurs avaient
        déjà sauté sur la tendance pour créer leur outil et « aider » la consommation locale, venant 
        appuyer le phénomène de prolifération des outils que nous voulions combattre à la base, tout ça pour faire peu de profit. 
        Et d'un coup, nous comprenons pourquoi nous avions perdus notre motivation.</p>
        <p class="mb-2">Nous avions passés tellement de temps à peaufiner le modèle économique pour
        être rentable que nous avions totalement perdus de vue le besoin initial : développer la consommation
        locale. La solution nous paraît comme une évidence : il faut supprimer la marge et remettre le
        besoin sur le devant de la scène. Il faut un outil gratuit, transparent et communautaire.
        Il faut une association. </p>

        <p class="mb-2">C'est comme ça que naquit la <b class="text-primary">fraise</b>. Une fraise et des milliers de lignes de code en libre accès.</p>
      </div>  
    </div>
  </div>
</div>
<div id="why-us" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-6 relative">
    <div class="flex items-center h-auto flex-wrap lg:mx-auto -mx-6">
      <h4 class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0 px-3 lg:px-0">
        Pourquoi nous ?
        <span class="bg-primary h-1 w-20 block mt-4" />
      </h4>
      <div class="p-4 md:p-12">
          <p class="mb-2">Les problèmes des producteurs, nous les connaissons bien. Petits-fils, 
          neveux et frères de paysans, nous avons à coeur d’aider les producteurs à gagner du temps. 
          C’est pour nous, littéralement, une affaire de famille.</p>
        <p class="mb-2">Notre expérience professionnelle dans l’innovation numérique nous a permis d’acquérir 
        un savoir autour des bons outils et des bonnes pratiques permettant de réduire les coûts liés 
        aux tiers (paiement en ligne) et à l’infrastructure (serveurs).</p>
      </div>
    </div>
  </div>
</div>

<div id="vision" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-6 relative">
    <div class="items-center h-auto lg:mx-auto -mx-6">
      <h4 class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0 px-3 lg:px-0">
        Sheaft dans cinq ans
        <span class="bg-primary h-1 w-20 block mt-4" />
      </h4>
      <div class="p-4 md:p-12">
        <div class="flex flex-wrap flex-col-reverse md:flex-row justify-between">
          <div class="w-full lg:w-1/2">
            <p class="mb-2">Pour l’instant, Sheaft c’est une association qui créé une application pour trouver des produits alimentaires autour de soi. Mais Sheaft dans cinq ans c’est bien plus que ça. Nous aimerions créer un standard de la consommation locale afin qu’elle devienne suffisamment agréable et confortable pour devenir un réflexe.</p>
            <p class="mb-2">Nous avons déjà quelques idées pour agrémenter notre plateforme et améliorer ses apports à la société. Les projets, ce n’est pas ce qu’il manque.</p>
          </div>
          <img src="./img/whatsapp.png" class="m-auto lg:m-0 mb-5 lg:mb-0" style="max-height: 310px;" />
        </div>
      </div>
      <div class="px-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {#each ideas as idea}
            <div class="m-auto text-center">
              <div class="bg-green-100 w-16 h-16 rounded-full m-auto flex items-center justify-center">
                <svg style="width: 30px;" version="1.1" class="fa-icon svelte-ieu2dh" fill="#009688" role="presentation" viewBox="0 0 352 512"><path key="path-0" d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path>  </svg>
              </div>
              <p class="text-xl">{idea.title}</p>
              <p class="text-lg text-gray-600 font-light">{idea.content}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<div id="team" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-16 relative">
    <h1 class="text-3xl font-bold pt-8 lg:pt-0 text-center">Membres de l'association</h1>
    <span class="bg-primary h-1 w-20 block mt-4 mb-4 text-center m-auto" />
    <div class="flex flex-col sm:flex-row justify-center">
      <!-- Card 1 -->
      <div class="sm:w-1/4 p-2">
        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3">
            <img
              class="w-auto mx-auto rounded-full"
              src="./img/team/nono.jpg"
              style="max-width: 150px;"
              alt=""
            />
          </div>
          <h2 class="text-xl font-semibold">Noël Mugnier</h2>
          <span class="block mb-5">Développeur backend</span>

          <a href="https://fr.linkedin.com/in/nmugnier" class="px-4 py-2 bg-blue-500 text-white rounded-full" target="_blank">LinkedIn</a
          >
        </div>
      </div>

      <!-- Card 2 -->
      <div class="sm:w-1/4 p-2">
        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3">
            <img
              class="w-auto mx-auto rounded-full"
              style="max-width: 150px;  min-height: 150px;"
              src="./img/team/geoffrey.jpg"
              alt=""
            />
          </div>
          <h2 class="text-xl font-semibold">Geoffrey Mugnier</h2>
          <span class="block mb-5">Développeur frontend</span>

          <a href="https://fr.linkedin.com/in/geoffrey-mugnier" class="px-4 py-2 bg-blue-500 text-white rounded-full" target="_blank">LinkedIn</a>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="sm:w-1/4 p-2">
        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3">
            <img
              class="w-auto mx-auto rounded-full"
              src="https://www.ecoris.com/wp-content/uploads/2018/06/Ma%C3%ABva-DI-MARINO-portrait-e1510304563864.jpg"
              style="max-width: 150px;  min-height: 150px;"
              alt=""
            />
          </div>
          <h2 class="text-xl font-semibold">Maëva Di Marino</h2>
          <span class="block mb-5">Community Manager</span>

          <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded-full" target="_blank">LinkedIn</a>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="sm:w-1/4 p-2">
        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3">
            <img
              class="w-auto mx-auto rounded-full"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFCNEC1mRTD1A/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=QmpVIZaCi6G7FY3-CvJkAWeWvKkx2HjNzYHwyPElhvE"
              style="max-width: 150px;  min-height: 150px;"
              alt=""
            />
          </div>
          <h2 class="text-xl font-semibold">Fanny Mugnier</h2>
          <span class="block mb-5">Chargée du support sur l'outil</span>  
          <a href="https://fr.linkedin.com/in/fmugnier" class="px-4 py-2 bg-blue-500 text-white rounded-full" target="_blank">LinkedIn</a>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="sm:w-1/4 p-2">
        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3">
            <img
              class="w-auto mx-auto rounded-full"
              src="./img/team/coffee.jpeg"
              style="max-width: 150px; min-height: 150px;"
              alt=""
            />
          </div>
          <h2 class="text-xl font-semibold">Machine à café</h2>
          <span class="block mb-5">Responsable du bonheur</span>

          <span class="px-4 py-2 bg-blue-500 text-white rounded-full invisible">LinkedIn</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="contact" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-16 relative text-center">
    <h1 class="text-3xl font-bold pt-8 lg:pt-0 text-center">On cause ?</h1>
    <span class="bg-primary h-1 w-20 block mt-4 mb-4 text-center m-auto" />
    <p class="mb-2">Ca nous ferait super plaisir de parler de Sheaft avec vous ! Ou de tout autre chose, on aime bien plein de sujets.</p>
    <p class="mb-2">N'hésitez pas à rejoindre notre Discord pour qu'on puisse échanger ensemble.</p>
    <img src="https://i.imgur.com/D5vyVzCg.png" style="max-width: 200px;" class="m-auto" />
  </div>
</div>


<style>
@media (min-width: 1024px) {
  .jumbo {
    padding-top: 10rem !important;
  }
}
</style>