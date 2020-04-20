<svelte:head>
  <title>Accueil</title>
</svelte:head>

<div class="pt-24">
	<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center text-white">
		<!--Left Col-->
		<div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
			<!-- <p class="uppercase tracking-loose w-full">un petit texte</p> -->
			<h1 class="my-4 text-5xl font-bold leading-tight">Consommer local,<br/>faire la différence.</h1>
			<p class="leading-normal text-2xl mb-8">Vers une consommation plus saine et plus responsable.</p>

			<button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Lancer l'application</button>
			
		</div>
		<!--Right Col-->
		<div class="w-full md:w-3/5 py-6 text-center">
			<img class="w-full md:w-4/5 z-50" src="img/shopping.svg" alt="Shopper des produits locaux">
		</div>
		
	</div>
</div>

<div class="relative -mt-12 lg:-mt-24">
	<svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	<g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
	<path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
	<path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
	<path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
	</g>
	<g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
	<path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
	</g>
	</g>
	</svg>
</div>    

 <div id="process" class="relative bg-white">
    <div class="container mx-auto px-6 pt-6 pb-12 relative">
      <h3 class="flex flex-col items-center text-4xl text-secondary font-bold mb-12">Une consommation en 3 étapes <span class="bg-primary h-1 w-20 block mt-4"></span></h3>
      <div class="flex flex-col md:flex-row xl:px-32">
        <div class="flex flex-col items-center md:px-6 lg:px-12">
          <span class="text-6xl text-primary">1</span>
          <h4 class="font-semibold text-2xl text-gray-800 mb-2">Rechercher</h4>
          <p class="text-center text-gray-600 text-xl leading-relaxed">Sheaft affiche tous les produits de tous les producteurs <b>autour de vous</b>. Vous n'avez qu'à faire vos emplettes !</p>
        </div>
        <div class="flex flex-col items-center md:px-6 lg:px-12">
          <span class="text-6xl text-primary">2</span>
          <h4 class="font-semibold text-2xl text-gray-800 mb-2">Récupérer</h4>
          <p class="text-center text-gray-600 text-xl leading-relaxed">Le producteur vous préviendra quand votre commande sera prête. Il n'y a plus qu'à aller la chercher !</p>
        </div>
        <div class="flex flex-col items-center md:px-6 lg:px-12">
          <span class="text-6xl text-primary">3</span>
          <h4 class="font-semibold text-2xl text-gray-800 mb-2">Accumuler</h4>
        <p class="text-center text-gray-600 text-xl leading-relaxed">A mesure que vous utilisez l'application, vous gagnez des points et faites aussi gagner des points à votre région.</p>
        </div>
      </div>
    </div>
  </div>

  <div id="missions" class="relative bg-white">
    <div class="container mx-auto px-6 py-32 relative">
      <h3 class="flex flex-col items-center text-4xl text-gray-800 font-bold">Nos missions <span class="bg-primary h-1 w-20 block mt-4"></span></h3>
      <div class="flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 md:mt-0 md:mt-16 lg:mt-0">
        <img src="/img/pushing_forward.svg" class="md:w-1/3">
        <div class="md:ml-16 xl:ml-32">
          <h4 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Mettre en avant les produits locaux</h4>
          <p class="text-gray-600 text-xl mb-4">Pour faciliter la transition vers une consommation plus responsable, Sheaft permet de trouver des produits en fonction de leur proximité.</p>
          <!-- <p class="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p> -->
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8">
        <div class="md:mr-16 xl:mr-32">
          <h4 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Soutenir nos producteurs</h4>
          <p class="text-gray-600 text-xl mb-4">Nous avons à cœur d’améliorer les conditions de travail et de rémunération des producteurs. C’est pour cela que nous faisons le choix de rendre l’utilisation de la plateforme gratuite.</p>
          <p class="text-gray-600 text-xl">Grâce à Sheaft, leurs produits sont plus visibles, et plus facilement accessibles aux commerces et aux consommateurs.</p>
        </div>
        <img src="/img/soutenir.svg" class="md:w-1/3">
      </div>
      <div class="flex flex-col md:flex-row items-center">
        <img src="/img/local_economy.svg" class="md:w-1/3">
        <div class="md:ml-16 xl:ml-32">
          <h4 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Maintenir l'économie locale</h4>
          <p class="text-gray-600 text-xl mb-4">Dans une situation économique compliquée, il n'a jamais été aussi important d'aider nos producteurs et petits commerçants à maintenir la tête hors de l'eau.</p>
          <p class="text-gray-600 text-xl">En utilisant notre plateforme ils augmentent leur visibilité et donc leur chiffre d'affaire potentiel.</p>
        </div>
      </div>
    </div>
  </div>

<!-- <div class="flex flex-col text-justify bg-white">
  <div class="overflow-x-auto">
    <div class="p-4">
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
    </div>
  </div>
</div> -->

<div class="section bg-white">
  <h3 class="flex flex-col items-center text-4xl text-secondary font-bold">Notre équipe <span class="bg-primary h-1 w-20 block mt-4"></span></h3>
  <div class="flex justify-center flex-wrap">
    <div class="w-64 m-4 py-12 bg-white shadow-lg px-3">
      <img class="w-24 h-24 mx-auto rounded-full" src="img/team/fanny.jpg" />
      <p class="mt-2 text-center text-lg text-gray-700 font-semibold">Fanny Mugnier</p>
      <p class="text-center text-gray-600 mb-2">Le spectre</p>
      <hr />
      <p class="text-center text-gray-600 mt-2">"Non, je suis sur WoW."</p>
    </div>
    <div class="w-64 m-4 py-12 bg-white shadow-lg px-3">
      <img class="w-24 h-24 mx-auto rounded-full" src="img/team/nono.jpg" />
      <p class="mx-2 mt-2 text-center text-lg text-gray-700 font-semibold">Noël Mugnier</p>
      <p class="text-center text-gray-600 mb-2">Le tech</p>
      <hr />
      <p class="text-center text-gray-600 mt-2">"Ouais ça c'est facile ! [...] sacrebleu de fichtre de bigre, tu vas marcher ?!"</p>
    </div>
    <div class="w-64 m-4 py-12 bg-white shadow-lg px-3">
      <img class="w-24 h-24 mx-auto rounded-full" src="img/team/geoffrey.jpg" />
      <p class="mx-2 mt-2 text-center text-lg text-gray-700 font-semibold">Geoffrey Mugnier</p>
      <p class="text-center text-gray-600 mb-2">L'autre tech</p>
      <hr />
      <p class="text-center text-gray-600 mt-2">"Ah ça marche pas ? Je l'ai fait un peu rapidement, je regarde après."</p>
    </div>
    <div class="w-64 m-4 py-12 bg-white shadow-lg px-3">
      <img class="w-24 h-24 mx-auto rounded-full" src="img/team/coffee.jpeg" />
      <p class="mx-2 mt-2 text-center text-lg text-gray-700 font-semibold">Machine à café</p>
      <p class="text-center text-gray-600 mb-2">Responsable du bonheur</p>
      <hr />
      <p class="text-center text-gray-600 mt-2">"Brrrrrrr...br...br...br...brrrrrr..."</p>
    </div>
  </div>
</div>

<!-- Change the colour #f8fafc to match the previous section colour -->
<svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		<g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
			<g class="wave" fill="#ffffff">
				<path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
			</g>
			<g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
				<g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
					<path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
					<path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
					<path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
				</g>
			</g>
		</g>
	</g>
</svg>

<section class="container mx-auto text-center py-6 mb-12">
	<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Restons en contact !</h1>
	<div class="w-full mb-4">	
		<div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
	</div>
	<h3 class="my-4 text-3xl leading-tight text-white">Pour rester informé de toutes nos avancées, inscrivez-vous à notre newsletter</h3>	
  <div class="flex items-center justify-center flex-wrap">
    <input class="w-11/12 md:w-2/5 bg-white text-gray-800 font-bold rounded my-6 py-4 px-3 shadow-lg text-xl" id="email" type="email" placeholder="Votre e-mail">
	  <button class="hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg text-xl ml-2">Je m'inscris !</button>  
  </div>
</section>

<!--Footer-->
<footer class="bg-white">
	<div class="container mx-auto px-8 bg-white">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="mb-6">
          <a class="text-primary no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> 
            SHEAFT
          </a>
        </div>
        <div class="flex-1">
          <p class="bg-white uppercase text-gray-500 md:mb-6 copyright">Copyright Sheaft @ 2020</p>
        </div>
      </div>
  </div>
</footer>


<style lang="scss">
  .copyright {
    @apply text-center;
    
    @media (min-width: 768px) {
      margin-right: 96px;
    }

    @media (min-width: 1024px) {
      margin-right: 144px;
    }
  }

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