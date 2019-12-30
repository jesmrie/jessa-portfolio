<script>
	let active = 'home';
</script>

<style>
  .navbar-inner {
    background: #F9FBFA !important;
  }

  .navbar-brand {
	font-weight: 700;
	font-family: 'Playfair Display', serif;
	color: #77c9ff !important;
  }

  .nav-item {
	  margin-left: 1.5em;
  }

  .nav-item.active {
	  border-bottom: solid 2px #77c9ff;
  }
</style>

<nav class="navbar navbar-inner fixed-top navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="/">Jessa Pedrola</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" class:active="{active === 'home'}"
		on:click="{() => active = 'home'}">
          <a class="nav-link" href="#home">Home</a>
        </li>
        <li class="nav-item" class:active="{active === 'about'}"
		on:click="{() => active = 'about'}">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item" class:active="{active === 'skills'}"
		on:click="{() => active = 'skills'}">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item" class:active="{active === 'contact'}"
		on:click="{() => active = 'contact'}">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
