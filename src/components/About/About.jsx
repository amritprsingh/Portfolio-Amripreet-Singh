import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div>
        <span className="education">
          <h2>Stony Brook University</h2>
          <p>Masters of Science in Computer Science (May 2026)</p>
          <p>B.S. Honors in Computer Science (May 2025)</p>
          <h4>GPA: 3.85</h4>
        </span>
      </div>
    </section>
  );
};
