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
			}, 700);
			resolve();
		})
	}

	onMount(() => {
		interval = setInterval(() => {
			changeMessage().then(() => currentMessage = null);
		}, 3000)
  })
  
  onDestroy(() => {
    clearInterval(interval);
  })
</script>

<div class="pt-16 md:pt-24">
  <div class="container px-6 py-6 mx-auto relative">
    <div
      class="flex flex-col w-full justify-center items-center text-center">
      <h1 class="my-4 text-4xl md:text-5xl leading-tight min-height text-normal font-bold text-center" style="color: #00ffe1 !important">
        Ensemble, on peut
        {#if currentMessage}
          <div in:fly|local={{duration: 500}} out:fly|local={{duration:500}} class="text-white">
            {currentMessage}.
          </div>
        {/if}
      </h1>
    </div>
  </div>
</div>

<div id="help" class="relative text-2xl">
  <div class="container mx-auto px-6 py-6 relative bg-white rounded-lg shadow-xl">
    <div class="items-center h-auto lg:mx-auto">
      <div class="pt-6 mb-6 lg:text-justify ">
        <div class="flex flex-wrap justify-between">
          <div class="w-full lg:w-1/2 md:mt-0">
            <p class="mb-2">Il y a plusieurs façons d'aider Sheaft mais les dons sont les plus importants pour la survie de l'association.</p>
            <p class="mb-2">Sans fonds pour l'association, nous n'avons aucun moyen de payer les charges liées à l'infrastructure, à l'hébergeur et au personnel.</p>
            <p class="mb-2">C'est pourquoi nous faisons appel à vous. Pour que l'économie locale soit mise en avant et pour 
            que nous puissions tous mieux manger, tout en allant dans le sens du climat.</p>
          </div>
          <div class="w-full lg:w-1/2 justify-center text-center">
            <img
              src="/img/donation.svg"
              class="md:w-6/12 m-auto mb-12"
              alt="mettre en avant" />
            <a href="https://opencollective.com/sheaft" class="mx-auto lg:mx-0 hover:underline bg-accent font-bold rounded-full my-6 py-4 px-8 shadow-lg text-white cusor-pointer">
              Je fais un don
            </a>
          </div>
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
      min-height: 135px;
    }
  }
</style>