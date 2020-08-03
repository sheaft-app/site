<svelte:head>
  <title>Sheaft - A propos</title>
</svelte:head>

<script>
  const members = [
    {
      name: "Noël Mugnier",
      title: "Développeur",
      linkedIn: "https://fr.linkedin.com/in/nmugnier",
      img: "nono.jpg"
    },
    {
      name: "Geoffrey Mugnier",
      title: "Développeur",
      linkedIn: "https://fr.linkedin.com/in/geoffrey-mugnier",
      img: "geoffrey.jpg"
    },
    {
      name: "Maëva Di Marino",
      title: "Community Manager",
      linkedIn: "https://fr.linkedin.com/in/maëva-di-marino-a08bb9129",
      img: "maeva.jpg"
    },
    {
      name: "Fanny Mugnier",
      title: "Chargée du support sur l'outil",
      linkedIn: "https://fr.linkedin.com/in/fmugnier",
      img: "fanny.jpeg"
    },
    {
      name: "Machine à café",
      title: "Responsable du bonheur",
      img: "coffee.jpg"
    }
  ];

  const ideas = [
    {
      title: "Point de retrait",
      content: "Créer des points de retrait communs pour limiter les déplacements"
    },
    {
      title: "Livraison participative",
      content: "Votre voisin commande aussi ? Regroupez vos commandes !"
    },
    {
      title: "Carte des invendus",
      content: "Localiser rapidement des invendus à la ferme, réduire le gaspillage"
    },
    {
      title: "Jardins particuliers",
      content: "Vendre plus facilement les fruits et les légumes de son propre potager"
    },
    {
      title: "Cagnotte producteur",
      content: "Financer les projets des producteurs grâce à une cagnotte démocrative"
    },
    {
      title: "Demander un coup de main",
      content: "Les patates à ramasser ? Les foins ? Demandez un coup de main aux volontaires !"
    },
    {
      title: "Proposer de l'artisanat",
      content: "Le local, c'est bien plus que de la nourriture"
    }
  ];
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
            <span class="text-primary">remanier la consommation locale</span>.
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="missions" class="relative bg-white pt-12">
  <div class="container mx-auto px-6 pb-1 relative">
    <div  
      class="flex flex-col md:flex-row items-center mb-16 mt-16
      md:mt-16 lg:mt-0">
      <img
        src="/img/pushing_forward.svg"
        class="md:w-1/3"
        alt="mettre en avant" />
      <div class="md:ml-16 xl:ml-32">
        <h4
          class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
          Simplifier l’accès à la consommation responsable
          <span class="bg-accent h-1 w-20 block mt-4" />
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light text-justify">
          Pourquoi est-il plus facile d’acheter un avocat au Mexique qu’un yaourt produit à 20km de chez soi ?
        </p>
        <p class="text-xl mb-4 text-gray-600 font-light text-justify">
          Sheaft, c’est la volonté d’inverser cette tendance. Mieux manger ne devrait pas impliquer un travail d’investigation fastidieux, 
          ça devrait être un réflexe. 
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-16 mt-16">
      <div class="md:mr-16 xl:mr-32">
        <h4
          class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
          Soutenir l'économie locale
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light text-justify">
          Les producteurs font un travail sans lequel nous ne pourrions vivre. Nous ne pouvons pas leur tourner le dos.
        </p>
        <p class="text-xl text-gray-600 font-light text-justify">
          Mettons en valeur la production locale réalisée dans des conditions optimales pour l’humain et pour la terre,
          rémunérons correctement les producteurs et réduisons l’impact financier des intermédiaires sur la chaîne.
        </p>
      </div>
      <img src="/img/soutenir.svg" class="md:w-1/3" alt="soutenez-les" />
    </div>
    <div
      class="flex flex-col md:flex-row items-center mb-16 mt-16">
      <img src="/img/innovation.svg" class="md:w-1/3" alt="cuisinez" />
      <div class="md:ml-16 xl:ml-32">
        <h4
          class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
          Innover dans le sens de l’humain et de l’écologie
          <span class="bg-accent h-1 w-20 block mt-4" />
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light text-justify">
          Jamais dans le sens du profit.
        </p>
        <p class="text-xl mb-4 text-gray-600 font-light text-justify">
          Il est possible de proposer des outils pratiques et innovants sans avoir à chercher un
           « business model scalable et replicable » au travers d'un produit « disruptif » qui ouvre la voie à une « croissance exponentielle » 
           et au statut de « licorne ».
        </p>
      </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mb-16 mt-16">
      <div class="md:mr-16 xl:mr-32">
        <h4
          class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0">
          Anticiper et développer notre résilience
          <span class="bg-primary h-1 w-20 block mt-4" />
        </h4>
        <p class="text-xl mb-4 text-gray-600 font-light text-justify">
          Nous avons tous été touchés par la dernière crise sanitaire. Et si ce n'était que la première ?
        </p>
        <p class="text-xl mb-4 text-gray-600 font-light text-justify">
          Nous devons tout faire pour combattre 
          l’apparition des prochaines et atténuer au maximum les dégâts si elles venaient à se produire.
        </p>
        <p class="text-xl text-gray-600 font-light text-justify">
         Sheaft s'est écartée du profit pour être le moins possible dépendante des fluctuations économiques.
         En période de crise, nous ne chercherons pas à sauver notre croissance mais à protéger les intérêts de toute notre communauté : producteurs et consommateurs.
        </p>
      </div>
      <img src="/img/resilience.svg" class="md:w-1/3" alt="Anticipons" />
    </div>
  </div>
</div>

<div id="story" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-6 relative">
    <div class="flex items-center h-auto flex-wrap lg:mx-auto">
      <h4 class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0 p-4" style="border: 3px solid #215163;">
        De la start-up à l'association
      </h4>
      <div class="pt-6 lg:px-0 text-justify">
        <p class="mb-2">À la base, on voulait faire une start-up.</p>
        <p class="mb-2">En septembre 2019, on avait réfléchi à un modèle économique, estimé nos charges, 
        établi des feuilles Excel pour calculer notre rentabilité... bref, on 
        ressemblait vraiment à une start-up ! Mais plus on avançait, plus on avait 
        le sentiment que quelque chose n'allait pas.</p>
        <p class="mb-2">Quand le confinement est apparu, la demande en local a explosé. En quelques semaines, des dizaines de boîtes
         ont surfé sur la tendance et chacune a créé son site pour aider la consommation locale, à coup d'abonnements et de taux 
         de commission. Et là, on a compris.</p>
        <p class="mb-2">On avait passé tellement de temps à étudier la rentabilité de notre projet qu'on avait totalement perdu de vue le besoin initial : 
          développer la consommation locale. La solution est alors apparue comme une évidence : il faut remettre ce besoin sur le 
          devant de la scène grâce à une application gratuite, transparente, et communautaire ; exit les taux de commission et les abonnements.
           Et quoi de mieux pour ce projet qu'une association ?</p>
        <p class="mb-2">C'est comme ça qu'est née la <b class="text-primary">fraise</b>. Une fraise et des milliers de lignes de code en libre accès.</p>
      </div>  
    </div>
  </div>
</div>
<div id="why-us" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-6 relative">
    <div class="flex items-center h-auto flex-wrap lg:mx-auto">
      <h4 class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0 p-4" style="border: 3px solid #215163;">
        Pourquoi nous ?
      </h4>
      <div class="pt-6 text-justify">
        <p class="mb-2">Les problèmes des producteurs, nous les connaissons bien. Petits-fils, 
        neveux et frères de paysans, nous avons à coeur d’aider les producteurs. 
        C’est pour nous, littéralement, une affaire de famille.</p>
        <p class="mb-2">Notre expérience professionnelle dans l’innovation numérique nous a permis d’acquérir 
        un savoir autour des bons outils et des bonnes pratiques permettant de réduire les coûts liés 
        aux tiers.</p>
        <p class="mb-2"></p>
        <p class="mb-2">En tant qu'association, nous sommes aussi renforcés par l'intelligence collective : tout le monde peut aider le projet
        à grandir. Nous n'allons que dans le sens du bien commun, défini par la communauté.</p>
        <p class="mb-2">À l'heure où nous écrivons ce paragraphe, nous sommes sept. Mais nous espérons de tout coeur 
        que "nous" définira bientôt des centaines de personnes.</p>
      </div>
    </div>
  </div>
</div>

<div id="vision" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-6 relative">
    <div class="items-center h-auto lg:mx-auto">
      <h4 class="text-2xl md:text-3xl font-bold mb-4 mt-4 md:mt-0 p-4" style="border: 3px solid #215163; width: fit-content;">
        Sheaft dans cinq ans
      </h4>
      <div class="pt-6 mb-6 text-justify">
        <div class="flex flex-wrap flex-col-reverse md:flex-row justify-between">
          <div class="w-full lg:w-1/2">
            <p class="mb-2">Pour l’instant, Sheaft c’est une association qui créé une application pour trouver des produits alimentaires autour de soi. Mais Sheaft dans cinq ans, c’est bien plus que ça. Nous aimerions en faire un standard de la consommation locale afin qu’elle devienne suffisamment agréable et confortable pour devenir un réflexe.</p>
            <p class="mb-2">Nous avons déjà quelques idées pour agrémenter notre plateforme et améliorer ses apports à la société. Les projets, ce n’est pas ce qu’il manque.</p>
          </div>
          <img src="./img/whatsapp.png" class="m-auto lg:m-0 mb-5 lg:mb-0" style="max-height: 270px;" />
        </div>
      </div>
      <div class="px-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
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
      {#each members as member}
        <div class="sm:w-1/4 p-2">
          <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center h-full relative" style="padding-bottom: 70px;">
            <div class="mb-3">
              <img
                class="w-auto mx-auto rounded-full"
                src="./img/team/{member.img}"
                style="max-width: 150px;  min-height: 150px;"
                alt=""
              />
            </div>
            <h2 class="text-xl font-semibold">{member.name}</h2>
            <span class="block mb-5">{member.title}</span>
            <a href={member.linkedIn} class:invisible={!member.linkedIn} class="px-4 py-2 bg-blue-500 text-white rounded-full absolute" style="left: 50%; margin-left: -50px; bottom: 25px;" target="_blank">LinkedIn</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<div id="contact" class="relative bg-white text-xl">
  <div class="container mx-auto px-6 py-16 relative text-center">
    <h1 class="text-3xl font-bold pt-8 lg:pt-0 text-center">On cause ?</h1>
    <span class="bg-primary h-1 w-20 block mt-4 mb-4 text-center m-auto" />
    <p class="mb-2">Ça nous ferait super plaisir de parler de Sheaft avec vous ! Ou de tout autre chose, on aime bien plein de sujets.</p>
    <p class="mb-2">N'hésitez pas à rejoindre notre Discord pour qu'on puisse échanger ensemble.</p>
    <a href="https://discord.gg/nur5Aem" target="_blank">
      <img src="img/discord.png" class="m-auto" style="max-width: 200px;" alt="Rejoindre notre Discord" />
    </a>
  </div>
</div>


<style>
@media (min-width: 1024px) {
  .jumbo {
    padding-top: 10rem !important;
  }
}
</style>