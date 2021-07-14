import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import styles from "./portfolio.module.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Link className={styles.textLink} to="/">
      Go back to home
    </Link>
    <div className="textCenter">
      <h1 className={styles.pageHeading}>portfolio</h1>
      <p>work in progress</p>
    </div>
    {/* <div className={styles.portfolioDiv}>
      <div>
        <StaticImage
          alt="jessa pedrola | web design"
          quality={100}
          src="../images/sample-work.png"
        />
      </div>
      <div>
        <StaticImage
          alt="jessa pedrola | web design"
          quality={100}
          src="../images/sample-work.png"
        />
      </div>
      <div>
        <StaticImage
          alt="jessa pedrola | web design"
          quality={100}
          src="../images/sample-work.png"
        />
      </div>
      <div>
        <StaticImage
          alt="jessa pedrola | web design"
          quality={100}
          src="../images/sample-work.png"
        />
      </div>
      <div>
        <StaticImage
          alt="jessa pedrola | web design"
          quality={100}
          src="../images/sample-work.png"
        />
      </div>
      <div>
        <StaticImage
          alt="jessa pedrola | web design"
          quality={100}
          src="../images/sample-work.png"
        />
      </div>
    </div> */}
  </Layout>
);

export default Portfolio;
