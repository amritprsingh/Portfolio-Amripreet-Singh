import React from "react";

import styles from "./Hero.module.css";
import resumePDF from "../../../Amritpreet_Singh_Resume2025.pdf";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I am Amritpreet</h1>
        <p className={styles.description}>
          I am currently pursuing a dual BS/MS degree in Computer Science and
          Applied Mathematics at Stony Brook University, while aiming for a
          career in software development or data analysis. With expertise in web
          development, backend/frontend engineering, AI, machine learning, and
          data science, I hope to leverage my skills in Python, Java, and C to
          create impactful technological solutions for society.
        </p>
        <span>
          <a
            href="mailto:amritpreetsingh0915@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a
            href={resumePDF}
            target="_blank"
            rel="noreferrer"
            className={styles.contactBtn}
          >
            Resume
          </a>
        </span>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
