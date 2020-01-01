<script>
  let waveSrc = "images/wave.svg";
  let portraitSrc = "images/portrait.png";

  let skills = [
    {
      src: "images/designer.png",
      title: "As a designer",
      text:
        "I mainly use Figma for web and mobile design work. I also use Adobe Photoshop for graphic design and quick edits."
    },
    {
      src: "images/developer.png",
      title: "As a developer",
      text:
        "I write HTML, CSS and Javascript. Frameworks / other techs I have experience with include React, Python, Firebase, Google App Engine, Ionic, and PHP."
    }
  ];
</script>

<style>
  h1 {
    color: #77c9ff;
    font-size: 4em;
  }

  .greeting p {
    font-size: 24px;
  }

  .btn-transparent {
    color: #b7dcf4;
    font-weight: 300;
  }
  .btn-transparent:hover {
    color: #77c9ff;
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 3em;
    }
  }

  @media (max-width: 769px) {
    .portrait {
      width: 100% !important;
    }

    img {
      margin-bottom: 1.5em;
    }
  }

  .skills-img{
    max-width: 135px;
    max-height: 135px;
  }

  .highlight,
  a {
    color: #77c9ff;
  }

  a:hover {
    text-decoration: none;
  }

  p {
    opacity: 0.8;
  }
  .card {
    border: none;
    background: none;
  }

</style>

<svelte:head>
  <title>Jessa Pedrola</title>
</svelte:head>
<section id="home" class="full">
  <div class="greeting mb-5">
    <img src={waveSrc} alt="wave" />
    <h1 class="mt-2 mb-3">Hi, I'm Jessa.</h1>
    <p>Full-stack developer, Designer, and Photo Hobbyist.</p>
  </div>
  <a href="#about" class="btn btn-transparent mt-5 p-2">
    Get to know me better
    <br />
    <img src="images/arrow-down.svg" alt="arrow down" />
  </a>
</section>

<section id="about" class="mb-1">
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6 text-left">
        <img class="portrait" src={portraitSrc} alt="Jessa Marie Pedrola" />
      </div>
      <div class="col-md-4 text-left">
        <hr class="hr-decorator" />
        <h2 class="mt-4 mb-4">About Me</h2>
        <p>
          A full-stack developer / designer based in Cebu, Philippines. During
          my free time, I read books, travel, and
          <span class="highlight">
            <a href="https://unsplash.com/@jessapedrola">take photos.</a>
          </span>
          I love what I do and I’m continuously trying to improve.
          <br />
          <br />
          I’m currently working at
          <span class="highlight">
            <a href="https://www.symph.co/">Symph</a>
          </span>
          — a web, mobile, and design company. I’m also a co-organizer for
          <span class="highlight">
            <a href="http://gdgcebu.org/">Google Developer Group Cebu</a>
          </span>
          , a non-profit group of amateurs and professionals who are independent
          from Google but are enthusiasts and daily users of Google
          technologies.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="skills">
  <div class="container text-left">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-7">
            <hr class="hr-decorator" />
            <h2 class="mt-4 mb-4">What I can do</h2>
            <p>
              I’m just starting out my career and is still looking for my niche
              but here’s a list of tools / tech stack I currently use for
              projects.
            </p>
          </div>
          <div class="mt-5 mb-5">
            {#each skills as { src, title, text }}
              <div class="card p-3">
                <div class="row">
                  <div class="col-md-2">
                    <img {src} class="w-100 skills-img" alt={title} />
                  </div>
                  <div class="col-md-6">
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>