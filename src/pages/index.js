import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { isMobile } from "react-device-detect";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { ScrollRotate } from "react-scroll-rotate";
import styles from "./index.module.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

import growthSeeker from "../images/growth-seeker.svg";
import facebook from "../images/socials/facebook.svg";
import instagram from "../images/socials/instagram.svg";
import linkedin from "../images/socials/linkedin.svg";
import unsplash from "../images/socials/unsplash.svg";

const IndexPage = () => {
  const [isMobileCheck, setIsMobileCheck] = useState(isMobile);
  if (isMobileCheck) {
    return (
      <Layout>
        <SEO title="Lifelong Learner" />
      <div className="textCenter">
        Mobile-responsiveness is still a work in progress. Please use desktop
        for better viewing.
        <br/>
        <button onClick={() => setIsMobileCheck(false)} className={`${styles.primaryButton} ${styles.marginTop20}`}>
          Continue to Site
        </button>
      </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <SEO title="Lifelong Learner" />
        <section>
          <Fade cascade>
            <div className="textCenter">
              <span className={styles.subText}>TALE OF A</span>
            </div>
            <div>
              <span className={`${styles.heroText} ${styles.aboveText}`}>
                lifelong
              </span>
              <span
                className={`${styles.heroText} ${styles.outline} ${styles.belowText}`}
              >
                learner
              </span>

              <div className={styles.heroDiv}>
                <div>
                  <StaticImage
                    src="../images/jessa-hero.jpg"
                    alt="jessa pedrola"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </Fade>
          <div className="section">
            <span className="hscroll-line"></span>
          </div>
        </section>
        <section>
          <Fade cascade>
            <div className={styles.row}>
              <div className={`${styles.column} ${styles.aboutImgDiv}`}>
                <StaticImage
                  alt="about jessa"
                  quality={100}
                  src="../images/jessa-about-2.jpg"
                />
              </div>
              <div className={styles.column}>
                <p>
                  Hi! I’m <strong>Jessa</strong>.
                </p>
                <p>
                  I previously worked as a full-stack developer but took my leap
                  of faith to pursue being a creative and at the same time,
                  learn more about my budding passion for finance, trading
                  cryptocurrencies &amp; the blockchain.
                </p>
                <p>
                  On my leisure time, I enjoy reading books, taking photos, go
                  trekking or camping, and watch anime or TV shows.
                </p>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <button
                    className={`${styles.primaryButton} ${styles.marginTop20}`}
                  >
                    Get in touch
                  </button>
                </Link>

                <div className={styles.growthSeeker}>
                  <ScrollRotate>
                    <img src={growthSeeker} width="100%" alt="growth seeker" />
                  </ScrollRotate>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section>
          <Fade cascade>
            <div className={`${styles.sectionHeading} ${styles.textRight}`}>
              <span className={styles.marginRight100}>learning</span>
              <br />
              <span className={styles.outline}>by doing</span>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.servicesLeft}>
                  <h1>I do graphic design</h1>
                  <p>
                    I started doing graphic design back when I was in grade
                    school for fun. That was 11 years ago! I usually design
                    stuff for myself and accepted requests from family and close
                    friends.
                  </p>
                  <p>
                    Currently, I create compelling designs for organizations
                    that I work or volunteer in.
                  </p>
                </div>
              </div>
              <div className={`${styles.column} ${styles.aboutImgDiv}`}>
                <StaticImage
                  alt="web design"
                  className={styles.sampleWork}
                  quality={100}
                  src="../images/graphic-design.png"
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.column} ${styles.aboutImgDiv}`}>
                <StaticImage
                  alt="web development"
                  className={styles.sampleWork}
                  quality={100}
                  src="../images/web-development.png"
                />
              </div>
              <div className={styles.column}>
                <div className={styles.servicesRight}>
                  <h1>I do web development</h1>
                  <p>
                    I first learned web development because of Tumblr. I wanted
                    to customize or create my own themes. That led me to take
                    the course BS Information Technology.
                  </p>
                  <p>
                    Got a job as a full-stack developer and got to build
                    applications using technologies like ReactJS, NodeJS,
                    Firebase, and MySQL with my team.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.servicesLeft}>
                  <h1>I do web design</h1>
                  <p>
                    I already had a passion for graphic design, why not try out
                    web design?
                  </p>
                  <p>
                    In my previous company, I also learned how to web design
                    using Figma. Was able to help out in some projects all
                    throughout the design thinking process: Empathize, Define,
                    Ideate, Prototype and Test.
                  </p>
                </div>
              </div>
              <div className={`${styles.column} ${styles.aboutImgDiv}`}>
                <StaticImage
                  alt="about jessa"
                  className={styles.sampleWork}
                  quality={100}
                  src="../images/web-design.png"
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={`${styles.column} ${styles.aboutImgDiv}`}>
                <StaticImage
                  alt="about jessa"
                  className={styles.sampleWork}
                  quality={100}
                  src="../images/fun.png"
                />
              </div>
              <div className={styles.column}>
                <div className={styles.servicesRight}>
                  <h1>I do other fun stuff</h1>
                  <p>
                    As a lifelong learner, I try a lot of different things out
                    of curiousity. I take photos, edit videos, do digital
                    marketing, organize events, trade cryptocurrencies, learn
                    about blockchain, sell stuff, and more. This helps me
                    broaden my horizon so I can give input from different
                    perspectives.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className={styles.fullWidth}>
          <div className={`textCenter ${styles.padding50}`}>
            <p>
              Still working on my portfolio, send me a message to
              see more samples of my work.
            </p>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                className={`${styles.secondaryButton} ${styles.margin10}`}
              >
                Send a message
              </button>
            </Link>
            {/* <a href="/portfolio">
            <button className={`${styles.secondaryButton} ${styles.margin10}`} disabled>
              See more work
            </button>
          </a> */}
          </div>
        </section>
        <section className={styles.hide}>
          <Fade cascade>
            <div className={`${styles.sectionHeading} textCenter`}>
              <span>learning&nbsp;</span>
              <span className={styles.outline}>by seeing</span>
            </div>
            <p className="textCenter">
              The best investment we can make for ourselves is to travel.
              Together with my camera, I want to see the world and broaden my
              horizon. Here are some of my shots. You can view more of my shots
              in
              <a
                href="https://www.instagram.com/jesmrie/"
                className={styles.textLink}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>{" "}
              or
              <a
                href="https://unsplash.com/@jessapedrola"
                className={styles.textLink}
                target="_blank"
              >
                Unsplash
              </a>
            </p>
          </Fade>
        </section>
        <section>
          <Fade cascade>
            <div className={styles.row}>
              <div className={`${styles.sectionHeading} ${styles.column}`}>
                <span>learning</span>
                <br />
                <span className={`${styles.outline} ${styles.marginLeft100}`}>
                  with others
                </span>
              </div>
              <div className={styles.experienceText}>
                some experiences that helped me accelerate my growth
              </div>
            </div>
            <table className={styles.experienceTable}>
              <tr>
                <td className={styles.dateTd}>07.2021 - Present</td>
                <td className={styles.positionTd}>
                  <strong>Freelance Creative</strong>
                </td>
                <td className={styles.descriptionTd}>
                  Help business owners and content creators achieve their
                  business or personal goals through creative work.
                </td>
              </tr>
              <tr>
                <td className={styles.dateTd}>06.2021 - Present</td>
                <td className={styles.positionTd}>
                  <strong>Creative Designer</strong>
                  <br />
                  <a
                    href="https://www.investagrams.com/p/openjournal"
                    className={styles.textLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Journal
                  </a>
                </td>
                <td className={styles.descriptionTd}>
                  Bring value to the trading community by creating and designing
                  content for bit- sized learning. Also helping with
                  initiatives.
                </td>
              </tr>
              <tr>
                <td className={styles.dateTd}>02.2019 - Present</td>
                <td className={styles.positionTd}>
                  <strong>Co-organizer</strong>
                  <br />
                  <a
                    href="https://gdgcebu.org"
                    className={styles.textLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GDG Cebu &amp; WTM Cebu
                  </a>
                </td>
                <td className={styles.descriptionTd}>
                  Spread learning by organizing events for the tech community in
                  Cebu. Helped with communications, logistics and design.
                </td>
              </tr>
              <tr>
                <td className={styles.dateTd}>07.2019 - 03.2021</td>
                <td className={styles.positionTd}>
                  <strong>Full Stack Developer</strong>
                  <br />
                  <a
                    href="https://symph.co"
                    className={styles.textLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Symph
                  </a>
                </td>
                <td className={styles.descriptionTd}>
                  Helped solve business problems and attract more customers by
                  developing web apps for multiple clients.
                </td>
              </tr>
              <tr>
                <td className={styles.dateTd}>07.2015 - 05.2019</td>
                <td className={styles.positionTd}>
                  <strong>Photojournalist</strong>
                  <br />
                  <a
                    href="https://www.facebook.com/todayscarolinian/"
                    className={styles.textLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Today’s Carolinian
                  </a>
                </td>
                <td className={styles.descriptionTd}>
                  Took photos of different events inside and outside the
                  University of San Carlos for the student publication.
                </td>
              </tr>
            </table>
          </Fade>
        </section>
        <section id="contact">
          <Fade cascade>
            <div className={`${styles.sectionHeading} textCenter`}>
              <span>work&nbsp;</span>
              <span className={styles.outline}>with me?</span>
            </div>
            <p className="textCenter">
              If you'd like to work with me, I'll make sure to add value and
              help you achieve your business or personal goals.
            </p>
            <div className={`textCenter ${styles.margin50}`}>
              <a
                href="mailto:pedrolajessamarie@gmail.com"
                className={styles.emailLink}
              >
                send an email
              </a>

              <div className={`${styles.socialMedia} ${styles.padding50}`}>
                <a href="https://www.linkedin.com/in/jessapedrola/">
                  <img src={linkedin} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100068336383846">
                  <img src={facebook} />
                </a>
                <a href="https://www.instagram.com/jesmrie">
                  <img src={instagram} />
                </a>
                <a href="https://unsplash.com/@jessapedrola">
                  <img src={unsplash} />
                </a>
              </div>
            </div>
          </Fade>
        </section>
      </Layout>
    );
  }
};

export default IndexPage;
