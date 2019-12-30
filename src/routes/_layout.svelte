<script>
  import Nav from "../components/Nav.svelte";
</script>

<style>
  main {
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Playfair+Display:400,700&display=swap"
    rel="stylesheet" />
  <title>Jessa Pedrola</title>
</svelte:head>

<Nav />

<main>
  <slot />
</main>
