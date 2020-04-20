<script>
  export let segment;
</script>

<!--Nav-->
<nav id="header" class="fixed w-full z-30 top-0 bg-white">

	<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
			
		<div class="pl-4 flex items-center">
			<a class="text-gray-800 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#"> 
       SHEAFT
			</a>
		</div>

		<div class="block lg:hidden pr-4">
			<button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
				<svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
          <a class="inline-block py-2 px-4 text-black font-bold no-underline" aria-current={segment === undefined ? 'page' : undefined} href=".">
            Accueil
          </a>
				</li>
				<li class="mr-3">
					<a class="inline-block py-2 px-4 text-black font-bold no-underline" aria-current={segment === 'about' ? 'page' : undefined} href="about">
            A propos
          </a>
				</li>
			</ul>
			<a id="navAction" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75" target="_blank" href="https://app.sheaft.com">Ouvrir Sheaft</a>
		</div>
	</div>
	
	<hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>
<!-- 
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
</style> -->