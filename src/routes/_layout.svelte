<script>
  import Nav from "../components/Nav.svelte";
  import Tailwindcss from "../components/Tailwind.svelte";

  export let segment;
</script>

<Tailwindcss />
<Nav {segment} />

<main>
  <slot />
</main>

<style lang="scss">
  main {
    position: relative;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
