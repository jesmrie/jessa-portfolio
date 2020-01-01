<script>

  let socialmedia = [
    {
      src: "images/facebook.png",
      alt: "Facebook",
      href: "https://www.facebook.com/jesmrie"
    },
    {
      src: "images/twitter.png",
      alt: "Twitter",
      href: "https://www.twitter.com/jesmrie"
    },
    {
      src: "images/insta.png",
      alt: "Instagram",
      href: "https://www.instagram.com/jesmrie"
    },
    // {
    //   src: "images/dribbble.png",
    //   alt: "Dribbble",
    //   href: "https://dribbble.com/jesmrie"
    // },
    {
      src: "images/linkedin.png",
      alt: "Linkedin",
      href: "https://www.linkedin.com/in/jessapedrola/"
    }
  ];

</script>

<style>
  .footer {
    color: #ffffff;
    background-color: #77c9ff;
    text-align: center;
    padding: 50px;
  }

  .email-link {
    color: #ffffff;
    text-decoration-line: underline;
  }

  .email-link:hover {
    text-decoration: none;
    color: #4eb9ff;
  }
</style>

<section id="contact" class="footer mt-5">
  <h5>Talk to me</h5>
  <p>
    Send me an
    <a class="email-link" href="mailto:jtorrepedrola@gmail.com">e-mail</a>
    or reach me through these platforms:
  </p>
  <div class="mb-5">
    {#each socialmedia as { src, alt, href }}
      <a {href} class="mr-3">
        <img {src} {alt} class="mb-1"/>
      </a>
    {/each}
  </div>
  <p>© 2020 Jessa Marie Pedrola. All Rights Reserved.</p>
</section>
