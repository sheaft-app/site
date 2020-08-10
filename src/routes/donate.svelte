<script>
	import { onMount, onDestroy } from "svelte";
	import { fly } from "svelte/transition";
	
  const texts = ["mieux rémunérer nos producteurs", "mieux manger", "mieux anticiper l'avenir", "mieux faire face aux enjeux", "devenir meilleurs"];
  
  let index = 0;
  let interval = null;
  let currentMessage = texts[index];
	
	function changeMessage() {
		return new Promise((resolve) => {
			setTimeout(() => {
				if (index >= (texts.length - 1)) {
					index = 0;
				} else {
					index++;
				}
				
				return currentMessage = texts[index];
			}, 300);
			resolve();
		})
	}

	onMount(() => {
		interval = setInterval(() => {
			changeMessage().then(() => currentMessage = null);
		}, 2000)
  })
  
  onDestroy(() => {
    clearInterval(interval);
  })
</script>

<svelte:head>
  <title>Sheaft - Nous soutenir</title>
</svelte:head>

<div class="pt-16 md:pt-24">
  <div class="container px-6 mx-auto relative">
    <div
      class="flex flex-col w-full justify-center items-center text-center">
      <h1 class="text-4xl md:text-5xl leading-tight min-height text-normal font-bold text-center" style="color: #00ffe1 !important">
        Ensemble, on peut
        {#if currentMessage}
          <div transition:fly|local={{duration:500}} class="text-white">
            {currentMessage}.
          </div>
        {/if}
      </h1>
    </div>
  </div>
</div>

<div id="help" class="relative text-xl">
  <div class="container mx-auto px-6 py-6 relative bg-white md:rounded-lg md:shadow-xl">
    <div class="items-center h-auto lg:mx-auto">
      <div class="pt-6 mb-6 lg:text-justify px-6">
        <div class="flex flex-wrap justify-between">
          <div class="w-full lg:w-1/2 md:mt-0">
            <h4
              class="text-2xl md:text-3xl font-bold mb-6 mt-4 md:mt-0">
              Vous êtes le poumon de Sheaft
              <span class="bg-primary h-1 w-20 block mt-4" />
            </h4>
            <p class="mb-5">Sheaft est une association. Nous n'avons pas pour but de faire du profit, mais plutôt d'encourager la solidarité,
              ainsi que d'améliorer le quotidien de tous en passant par une consommation plus responsable. L'application est gratuite, mais Sheaft 
              supporte de son côté des charges liées à l'infrastructure, à l'hébergement de la plateforme et au personnel.</p>
            <p class="mb-5">C'est pourquoi nous faisons appel à vous.</p>
            <p class="mb-5">Vos dons sont indispensables au bon fonctionnement de l'association. Pour que l'économie locale 
            soit mise en avant, et que nous puissions tous mieux manger, en ayant un impact plus faible sur l'environnement.</p>
          </div>
          <div class="w-full lg:w-1/2 justify-center text-center m-auto">
            <img
              src="/img/donation.svg"
              class="md:w-7/12 w-2/3 m-auto mb-12"
              alt="mettre en avant" />
            <a href="https://opencollective.com/sheaft" target="_blank" class="mx-auto lg:mx-0 hover:underline bg-accent font-bold rounded-full my-6 py-4 px-8 shadow-lg text-white cusor-pointer">
              Faire un don
            </a>
            <div class="mt-10">
              <a href="/donate#connect" class="text-accent">Je n'arrive pas à me connecter à OpenCollective</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-6 py-6 relative bg-white md:rounded-lg md:shadow-xl md:mt-10">
    <div class="items-center h-auto lg:mx-auto">
      <div class="pt-6 mb-6 lg:text-justify px-6">
        <div class="w-full">
          <h4
            class="text-2xl md:text-3xl font-bold mb-6 mt-4 md:mt-0">
            À propos de Open Collective
            <span class="bg-primary h-1 w-20 block mt-4" />
          </h4>
          <p id="connect" class="font-semibold mb-2">Comment se connecter à OpenCollective ?</p>
          <p class="mb-1">OpenCollective utilise la connexion en un clic, ça veut dire qu'il n'y a pas de mot de passe. Une fois que vous avez rempli le premier encart avec votre nom et votre email, vous recevrez un email dans votre boîte.</p>
          <p class="mb-5">Cliquez sur le bouton bleu à l'intérieur de ce mail pour vous connecter et faire un don.</p>

          <p class="font-semibold mb-2">Pourquoi utiliser OpenCollective ?</p>
          <p class="mb-1">OpenCollective nous permet de gérer les finances de l'association tout en restant transparent.
           Grâce à eux, toutes les transactions de l'association sont visibles par tout le monde sur notre <a class="text-accent" href="https://opencollective.com/sheaft" target="_blank">page dédiée OpenCollective</a>.</p>
          <p class="mb-5">Cela représente pour nous un gage de <b>confiance</b> indispensable.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .min-height {
    min-height: 180px;
  }

  @media (max-width: 767px) {
    .min-height {
      min-height: 235px;
    }
  }
</style>