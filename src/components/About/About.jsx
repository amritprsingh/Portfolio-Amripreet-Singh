import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.inner}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.card}>
          <div className={styles.school}>
            <h3 className={styles.schoolName}>Stony Brook University</h3>
            <span className={styles.location}>Stony Brook, NY</span>
          </div>
          <div className={styles.degrees}>
            <div className={styles.degree}>
              <p className={styles.degreeTitle}>M.S. Computer Science</p>
              <p className={styles.degreeMeta}>Aug 2024 – May 2026 &nbsp;·&nbsp; GPA: 3.85</p>
            </div>
            <div className={styles.degree}>
              <p className={styles.degreeTitle}>
                B.S. Computer Science &amp; Applied Mathematics &nbsp;·&nbsp; Double Major
              </p>
              <p className={styles.degreeMeta}>Aug 2021 – May 2025 &nbsp;·&nbsp; GPA: 3.83</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
