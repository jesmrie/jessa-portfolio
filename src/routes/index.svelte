<script>
  let vectorSrc = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png"
  ];

  let portraitSrc = "images/portrait.png";
  let vector8 = "images/8.png";

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
    {
      src: "images/dribbble.png",
      alt: "Dribbble",
      href: "https://dribbble.com/jesmrie"
    },
    {
      src: "images/linkedin.png",
      alt: "Linkedin",
      href: "https://www.linkedin.com/in/jessapedrola/"
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

  .btn-primary {
    background-color: #77c9ff;
    border-color: #77c9ff;
  }

  .btn-primary:hover {
    background-color: #4eb9ff;
    border-color: #4eb9ff;
  }

  .font-white {
    color: #ffffff !important;
  }

  .vector {
    display: none;
  }


  @media (max-width: 640px) {
	.portrait {
		width: 100% !important;
	}

	img {
		margin-bottom: 1.5em;
	}
  }

  @media (min-width: 640px) {
    .vector {
      display: block;
      position: absolute;
    }
    .vector-1 {
      top: 85px;
      left: 75px;
    }

    .vector-2 {
      left: 200px;
      top: 250px;
    }

    .vector-3 {
      left: 100px;
      top: 500px;
    }

    .vector-4 {
      left: 530px;
      top: 400px;
    }

    .vector-5 {
      right: 30px;
      top: 450px;
    }

    .vector-6 {
      right: 300px;
      top: 300px;
    }

    .vector-7 {
      right: 50px;
    }

    .vector-8 {
      bottom: -200px;
      right: 50px;
	}
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

<section id="home" class="full">

  <!-- vectors in background -->
  {#each vectorSrc as src, i}
    <img {src} class="vector vector-{i + 1}" alt="vector" />
  {/each}
  <div class="greeting">
    <h1 class="mt-5 mb-3">Hi, I'm Jessa.</h1>
    <p>Full-stack developer, Designer, and Photo Hobbyist.</p>
  </div>
  <a href="#about" class="btn btn-primary font-white mt-5 p-2">
    Get to know me better
  </a>
</section>

<section id="about" class="mb-5">
  <img src={vector8} class="vector vector-8" alt="vector" />
  <div class="container">
    <div class="row">
      <div class="col-md-6 text-left">
        <img class="portrait" src={portraitSrc} alt="Jessa Portrait" />
      </div>
      <div class="col-md-4 text-left">
        <hr class="hr-decorator" />
        <h2 class="mt-4 mb-4">About Me</h2>
        <p>
          A
          <span class="highlight">full-stack developer / designer</span>
          based in Cebu, Philippines. During my free time, I read books, travel,
          and take photos. I love what I do and I’m continuously trying to
          improve.
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
    <div class="row">
      <div class="col-md-6">
        <hr class="hr-decorator" />
        <h2 class="mt-4 mb-4">What I can do</h2>
        <p>
          I’m just starting out my career and is still looking for my niche but
          here’s a list of tools / tech stack I currently use for projects.
        </p>
      </div>
      <div class="mt-5 mb-5">
        {#each skills as { src, title, text }}
          <div class="card p-3">
            <div class="row">
              <div class="col-md-2">
                <img {src} alt={title} />
              </div>
              <div class="col-md-5">
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<section id="contact" class="footer">
  <h5>Talk to me</h5>
  <p>
    Send me an
    <a class="email-link" href="mailto:jtorrepedrola@gmail.com">e-mail</a>
    or reach me through these platforms:
  </p>
  <div class="mb-5">
    {#each socialmedia as { src, alt, href }}
      <a {href} class="mr-4">
        <img {src} {alt} />
      </a>
    {/each}
  </div>
  <span>© 2020 Jessa Marie Pedrola. All Rights Reserved.</span>
</section>
