import React from "react";
import styles from "./Hero.module.css";
import resumePDF from "../../../Amritpreet_Singh_Resume_SWE_2026.pdf";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hi, I&apos;m</p>
          <h1 className={styles.title}>Amritpreet Singh</h1>
          <p className={styles.description}>
            CS graduate student at Stony Brook University with hands-on
            experience in full-stack development, backend engineering, and
            AI/ML systems. I&apos;ve built production software at HavenSmart, Ding
            Carpool, and Mavn AI — and I care about writing code that&apos;s fast,
            clean, and maintainable.
          </p>
          <div className={styles.buttons}>
            <a
              href="mailto:amritpreetsingh0915@gmail.com"
              className={styles.btnPrimary}
            >
              Contact Me
            </a>
            <a
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
              className={styles.btnSecondary}
            >
              Resume
            </a>
          </div>
        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Amritpreet Singh"
          className={styles.heroImg}
        />
      </div>
    </section>
  );
};
