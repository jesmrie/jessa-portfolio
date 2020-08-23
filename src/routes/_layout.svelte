<style>
  main {
    padding: 100px;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    main {
      padding: 20px;
      max-width: none;
    }
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,600,700|Lato:400,700&display=swap"
    rel="stylesheet" />
  <title>Jessa Pedrola</title>
</svelte:head>
<main>
  <slot />
</main>

<a href="/404" style="display:none">404</a>
