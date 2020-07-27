<script>
	import { slide } from 'svelte/transition';
  export let segment;

  let navExpended = false;

  function openNav(){
    navExpended = true;
    document.querySelector('body').style.position = 'fixed';
  }

  function closeNav(){
    navExpended = false;
    document.querySelector('body').style.position = 'relative';
  }

</script>

<!--Nav-->
<nav
  id="header"
  class="fixed w-full z-30 top-0 gradient"
  style="transition: all 0.3s ease-in-out;">
  <div
    class="w-full container mx-auto flex flex-wrap items-center justify-between
    mt-0 py-3">
    <div class="pl-4 flex items-center">
        <a href="/"><img src="./img/sheaft_white.svg" width="150" height="70" style="max-width: 140px;" alt="SHEAFT" /></a>
    </div>

    <div class="block lg:hidden pr-4" style="z-index:10;">
      {#if !navExpended}
        <button
          id="nav-toggle"
          on:click={openNav}
          class="flex items-center p-1 text-white">
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      {:else}
        <button
          id="nav-close"
          on:click={closeNav}
          class="flex items-center p-1 text-white">
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Fermer</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      {/if}
    </div>

    <div
      class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block
      mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      id="nav-content">
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <a
            class="inline-block py-2 px-4 text-white font-bold no-underline"
            aria-current={segment === undefined ? 'page' : undefined}
            href="/">
            Accueil
          </a>
        </li>
        <li class="mr-3">
          <a
            class="inline-block py-2 px-4 text-white font-bold no-underline"
            aria-current={segment === 'producers' ? 'page' : undefined}
            href="/producers">
            Je suis producteur
          </a>
        </li>
        <!-- <li class="mr-3">
          <a
            class="inline-block py-2 px-4 text-white font-bold no-underline"
            aria-current={segment === 'shops' ? 'page' : undefined}
            href="/shops">
            Je suis commercant
          </a>
        </!--> 
        <li class="mr-3">
          <a
            class="inline-block py-2 px-4 text-white font-bold no-underline"
            aria-current={segment === 'about' ? 'page' : undefined}
            href="/about">
            A propos
          </a>
        </li>
        <li class="mr-3">
          <a
            class="inline-block py-2 px-4 text-white font-bold no-underline"
            aria-current={segment === 'support-us' ? 'page' : undefined}
            href="/support-us">
            Soutenir le projet
          </a>
        </li>
      </ul>
      <!-- <a
        id="navAction"
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold
        rounded-full mt-4 lg:mt-0 py-4 px-8 shadow"
        target="_blank"
        href="https://app.sheaft.com">
        Ouvrir Sheaft
      </a> -->
    </div>
  </div>
</nav>

{#if navExpended}
  <nav transition:slide
    class="nav fixed content-between overflow-hidden lg:hidden z-20"
    class:active={navExpended}>
    <div class="w-full">
      <ul class="nav__menu">
          <li>
            <a
              on:click={closeNav}
              class="w-full inline-block py-5 px-4 text-white font-bold text-gray-700
              no-underline border-b border-gray-300 hover:bg-gray-500"
              aria-current={segment === undefined ? 'page' : undefined}
              class:active={segment === undefined}
              href="/">
              Accueil
            </a>
          </li>
          <li>
            <a
              on:click={closeNav}
              class="w-full inline-block py-5 px-4 font-bold no-underline text-gray-700
              border-b border-gray-300 hover:bg-gray-500"
              aria-current={segment === 'producers' ? 'page' : undefined}
              class:active={segment === 'producers'}
              href="/producers">
              Je suis producteur
            </a>
          </li>
          <!-- <li>
            <a
              on:click={closeNav}
              class="w-full inline-block py-5 px-4 font-bold no-underline text-gray-700
              border-b border-gray-300 hover:bg-gray-500"
              aria-current={segment === 'shops' ? 'page' : undefined}
              class:active={segment === 'shops'}
              href="/producers">
              Je suis commercant
            </a>
          </!-->
          <li>
            <a
              on:click={closeNav}
              class="w-full inline-block py-5 px-4 font-bold no-underline text-gray-700
              border-b border-gray-300 hover:bg-gray-500"
              aria-current={segment === 'about' ? 'page' : undefined}
              class:active={segment === 'about'}
              href="/about">
              A propos
            </a>
          </li>
          <li>
            <a
              on:click={closeNav}
              class="w-full inline-block py-5 px-4 font-bold no-underline text-gray-700
              border-b border-gray-300 hover:bg-gray-500"
              aria-current={segment === 'support-us' ? 'page' : undefined}
              class:active={segment === 'support-us'}
              href="/support-us">
              Soutenir le projet
            </a>
          </li>
        </ul>
            <!-- <a
              on:click={closeNav}
              class="w-full py-5 px-4 font-bold no-underline text-gray-700
              border-t border-solid text-center border-gray-300 hover:bg-gray-500 absolute bottom-0"
              href="https://app.sheaft.com"
              target="_blank">
              Ouvrir l'application
            </a> -->
    </div>
  </nav>
{/if}

<style>
  .nav {
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #fdfdfd;
    transition: all 0.3s linear;    
      position: fixed;
      padding-top: 50px;
      width: 100%;
  }

  .nav a.active {
    color: #009688 !important;
  }
</style>
