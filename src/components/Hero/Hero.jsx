import React from "react";

import styles from "./Hero.module.css";
import resumePDF from "amritprsingh/Portfolio-Amripreet-Singh/Amritpreet_Singh_Resume2025.pdf"
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I am Amritpreet</h1>
        <p className={styles.description}>
          I'm a Computer Science student with aspirations in Software
          Development. My experience focusses on full-stack development and data
          analytics
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
