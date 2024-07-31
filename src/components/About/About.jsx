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
          <p>Double Major in Computer Science and Applied Mathematics</p>
          <p>Accelerated Masters Program in Computer Science</p>
          <h4>Expected Graduation 2025</h4>
          <h4>GPA: 3.82</h4>
        </span>
        <img src={"../../assets/about/cursonIcon.png"} alt="Cursor icon" />
      </div>
    </section>
  );
};
