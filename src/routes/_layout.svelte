<script>
  import Nav from "../components/Nav.svelte";
  import Tailwindcss from "../components/Tailwind.svelte";

  export let segment;

  let y;
</script>

<svelte:window bind:scrollY={y} />

<Tailwindcss />
<Nav {segment} isActive={y > 100} />

<main>
  <slot />
</main>

<p class="text-center w-full text-white mt-6 mb-2">
  <a href="/legals" target="_blank">Informations légales</a>
  -
  <a href="/privacy" target="_blank">Déclaration de confidentialité</a>
</p>

  <p class="my-3 italic text-center text-gray-100">
    Copyright Sheaft @ 2020
  </p>

<style lang="scss">
  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
