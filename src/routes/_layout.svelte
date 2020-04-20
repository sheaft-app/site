<script>
  import Nav from "../components/Nav.svelte";
  import Tailwindcss from "../components/Tailwind.svelte";

  export let segment;

  let y;
</script>

<svelte:window bind:scrollY={y}/>

<Tailwindcss />
<Nav {segment} isActive={y > 100} />

<main>
  <slot />
</main>

<style lang="scss">
  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
