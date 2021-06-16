<script>
  let socialmedia = [
    {
      src: "images/linkedin.svg",
      alt: "Linkedin",
      href: "https://www.linkedin.com/in/jessapedrola/"
    },
    {
      src: "images/github.svg",
      alt: "Github",
      href: "https://github.com/jesmrie"
    },
    {
      src: "images/unsplash.svg",
      alt: "Unsplash",
      href: "https://unsplash.com/@jessapedrola"
    },
    {
      src: "images/instagram.svg",
      alt: "Instagram",
      href: "https://www.instagram.com/jesmrie"
    },
  ];
</script>

<style>
    p {
      font-size: 2.5rem;
    }
  @media (max-width: 640px) {

    p {
      font-size: 1.3rem;
    }

  }

  .social-links {
    margin-top: 50px;
  }

  .social-links div {
   margin-bottom: 0.5em;
  }

  .social-link-img {
    opacity: 45%;
  }

  .social-link-img:hover {
    opacity: 100%;
  }

</style>

<svelte:head>
  <title>Jessa Pedrola</title>
</svelte:head>
<div class="row text-center">
  <p>
    Lifelong learner.
  </p>

  <p>This page is indefinitely under construction.<br />🚧</p>

  <div class="social-links">
    {#each socialmedia as { src, alt, href }}
    <div>
      <a {href} class="social-link-img">
        <img {src} {alt} class="mb-1" />
      </a>
    </div>
    {/each}
  </div>
</div>