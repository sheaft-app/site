<svelte:head>
  <title>Accueil</title>
</svelte:head>

<div class="flex flex-col text-justify">
  <div class="overflow-x-auto">
    <div class="jumbotron">
      <h1 class="font-bold text-gray-800 text-6xl text-center">SHEAFT</h1>
      <p class=" text-center text-xl">
        Vers une consommation locale, plus simple et plus rapide.
      </p>
    </div>
    <br />
    <div class="p-4">
      <h2 class="text-2xl text-center">Nos missions</h2>
      <div class="flex">
        <div class="about-text w-4/12 p-4">
          <h3 class="text-gray-700 text-xl text-center">
            Mettre en avant les produits locaux
          </h3>
          <br />
          <p class="text-justify">
            Pour faciliter la transition vers une consommation plus responsable,
            Sheaft permet de trouver des produits en fonction de leur proximité
          </p>
        </div>
        <div class="about-text w-4/12 p-4">
          <h3 class="text-gray-700 text-xl text-center">
            Soutenir nos producteurs
          </h3>
          <br />
          <p class="text-justify">
            Nous avons à cœur d’améliorer les conditions de travail et de
            rémunération des producteurs. C’est pour cela que nous faisons le
            choix de rendre l’utilisation de la plateforme gratuite. Grâce à
            Sheaft, leurs produits sont plus visibles, et plus facilement
            accessibles aux commerces et aux consommateurs.
          </p>
        </div>
        <div class="about-text w-4/12 p-4">
          <h3 class="text-gray-700 text-xl text-center">
            Maintenir l'économie locale
          </h3>
          <br />
          <p class="text-justify">
            Dans une situation économique compliquée, il n'a jamais été aussi
            important d'aider nos producteurs et petits commerçants à maintenir
            la tête hors de l'eau. En utilisant notre plateforme ils augmentent
            leur visibilité et donc leur chiffre d'affaire potentiel.
          </p>
        </div>
      </div>
      <br />
      <h2 class="text-2xl text-center">Sheaft, c'est quoi ?</h2>
      <div class="flex">
        <div class="services-content w-1/2 p-4">
          <h3 class="text-gray-700 text-xl text-center">
            Une recherche performante
          </h3>
          <br />
          <p class="text-justify">
            Sur notre plateforme, les catalogues producteurs sont centralisés,
            que vous soyez commerçant ou consommateur trouver des produits
            locaux est un jeu d'enfants et ne requiert plus de jongler entre de
            multiple sites pour faire ses courses!
          </p>
        </div>
        <div class="services-content w-1/2 p-4">
          <h3 class="text-gray-700 text-xl text-center">
            Une jauge de proximité
          </h3>
          <br />
          <p class="text-justify">
            Grâce à une jauge colorée en fonction de la proximité géographique,
            vous pouvez voir en un coup d'oeil quels produits sont proches de
            vous. Consommer local n'a jamais été aussi facile !
          </p>
        </div>
      </div>
      <br />
      <h2 class="text-2xl text-center">D'où vient Sheaft ?</h2>
      <p class="p-4 text-justify">
        L'idée est née dans une ferme, au sein du GAEC La Ferme du Parquet, à
        Gruffy (Haute-Savoie). C'est en voyant la rudimentarité des outils
        utilisés pour prendre les commandes des différents magasins ainsi que la
        grande profilération de site web que Noël, développeur en reconversion
        agricole, décide de faire avancer les choses. Adieu les fichiers Excel,
        les mails et le trop grand nombre de site, place à Sheaft !
      </p>
      <br />
      <h2 class="text-2xl text-center">Qui sommes-nous ?</h2>
      <div class="flex p-4">
        <div class="w-4/12 p-2 text-center">
          <div>
            <img
              class="m-auto img-fluid profile-picture"
              src="img/team/fanny.jpg"
              alt="" />
            <h3 class="text-gray-800">Fanny Mugnier</h3>
            <p>Co-founder, CMO</p>
          </div>
          <a href="https://www.linkedin.com/in/fmugnier" target="_blank">
            <i class="fab fa-linkedin-in px-2 py-2" />
          </a>
        </div>
        <div class="w-4/12 p-2 text-center">
          <div>
            <img
              class="m-auto img-fluid profile-picture"
              src="img/team/geoffrey.jpg"
              alt="" />
            <h3 class="text-gray-800">Geoffrey Mugnier</h3>
            <p>Co-founder, CEO</p>
          </div>
          <a
            href="https://www.linkedin.com/in/geoffrey-mugnier/"
            target="_blank">
            <i class="fab fa-linkedin-in px-2 py-2" />
          </a>
        </div>
        <div class="w-4/12 p-2 text-center">
          <div>
            <img
              class="m-auto img-fluid profile-picture"
              src="img/team/nono.jpg"
              alt="" />
            <h3 class="text-gray-800">Noël Mugnier</h3>
            <p>Co-founder, CTO</p>
          </div>
          <a href="https://www.linkedin.com/in/nmugnier/" target="_blank">
            <i class="fab fa-linkedin-in px-2 py-2" />
          </a>
        </div>
      </div>
      <br />
      <p class="text-center">Copyright @Sheaft - 2020</p>
    </div>
  </div>
</div>

<style lang="scss">
  .profile-picture {
    width: 150px;
    border-radius: 100px;
  }
  .jumbotron {
    height: 400px;
    background: url("/img/home.jpg") no-repeat center center fixed !important;
    color: white;
    padding: 9em;
  }
  .jumbotron h1 {
    color: white !important;
  }
</style>
