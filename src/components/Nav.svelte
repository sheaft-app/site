<script>
  export let segment;
</script>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Accueil
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        A propos
      </a>
    </li>
    <li>
      <a target="_blank" href="https://app.sheaft.com">Application</a>
    </li>
  </ul>
</nav>

<style lang="scss">
  nav {
    border-bottom: 1px solid #33d7a3;
    font-weight: 300;
    padding: 0 1em;
    background-color: #33d7a3;
    color: white;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #8cfbd8;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
