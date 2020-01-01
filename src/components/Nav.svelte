<script>
  import { stores } from '@sapper/app';
  const { page } = stores();
  $:active = $page.path;
</script>

<style>
  .navbar-inner {
    background: #f9fbfa !important;
  }

  .navbar-brand {
    font-weight: 700;
    font-family: "Playfair Display", serif;
    color: #77c9ff !important;
  }

  .nav-item {
    margin-left: 2em;
  }
  .nav-item.active {
    border-bottom: solid 2px #77c9ff;
  }
</style>

<nav
  class="navbar navbar-inner navbar-expand-lg navbar-light bg-light">
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
        <li
          class="nav-item"
          class:active={active === '/'}>
          <a class="nav-link" href="/">About</a>
        </li>
        <li
          class="nav-item"
          class:active={active === '/work'}>
          <a class="nav-link" href="/work">Work</a>
        </li>
        <li
          class="nav-item"
          class:active={active === '/blog'}>
          <a class="nav-link" href="/blog">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
