<script>
  import { onMount } from "svelte";

  let copied = false;
  const link = 'https://www.sheaft.com';

  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Sheaft - Consommer local, plus facilement",
          text:
            "Découvrez et commandez en quelques clics des produits de qualité issus de la production locale.",
          url: link
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.error("Error sharing", error));
    } else {
      console.log("Cannot do that");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    copied = true;
  };
</script>

<div class="pt-16 md:pt-24 text-lg">
  <div class="container mx-auto px-6 py-6 relative md:rounded-lg">
    <div class="items-center h-auto lg:mx-auto">
      <div class="pt-6 mb-6 lg:text-justify">
        <div class="h-full">
          <div class="text-center">
            <img
              src="/img/social.svg"
              class="m-auto"
              style="width: 150px;"
              alt="Cadeaux !" />
            <p class="mt-5 text-white">Plus on est de fraises, plus on mûrit !</p>
            <p class="mb-5 text-white">Fais passer le mot en partageant !</p>
            {#if navigator.share}
              <button
                on:click={() => handleClick()}
                class="btn bg-white btn-lg mt-3 m-auto">
                <svg version="1.1" fill="#205163" class="fa-icon mr-2" width="14" height="16" role="presentation" viewBox="0 0 448 512" style=""><path key="path-0" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>  </svg>
                Partager
              </button>
            {:else}
              <div class="flex flex-wrap justify-center">
                <span
                  id="link"
                  class="w-full md:w-auto px-4 py-2 border border-gray-400 mb-2 mr-0
                  md:mb-0 md:mr-2 font-semibold text-white">
                  {link}
                </span>
                {#if copied}
                  <span class="btn px-6 py-2 mt-3 md:mt-0 text-white">
                    <svg version="1.1" fill="#ffffff" class="fa-icon mr-2" width="12" height="16" role="presentation" viewBox="0 0 384 512" style=""><path key="path-0" d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"></path>  </svg>
                    Copié !
                  </span>
                {:else}
                  <button
                    class="mt-3 md:mt-0 btn bg-white shadow rounded-full px-6 py-2"
                    style="transition: none !important;"
                    on:click={() => copyToClipboard()}>
                    <svg version="1.1" fill="#205163" class="fa-icon mr-2" width="12" height="16" role="presentation" viewBox="0 0 384 512" style=""><path key="path-0" d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"></path>  </svg>
                    Copier le lien
                  </button>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>