<script>
  let waveSrc = "images/wave.svg";
  let portraitSrc = "images/portrait.png";

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
  h1 {
    font-size: 4em;
    text-transform: uppercase;
    margin-bottom: 0.3em;
    margin-top: 1em;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 2.4em;
    }

    p {
      font-size: 1em;
    }

    .btn-primary {
      font-size: 1em;
    }
  }

  .social-links {
    text-align: right;
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
<div>
  <h1>Jessa Pedrola</h1>
  <p>
    Full-stack Dev. Designer. And some other stuff. <br/>
    Currently working at <a href="https://www.symph.co/">Symph</a>.
  </p>

  <p>This page is indefinitely under construction. 🚧</p>
  <div class="mt-4">
    <a href="mailto:pedrolajessamarie@gmail.com" class="btn-primary mt-5">Say Hi</a>
  </div>

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