import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/techprojects.json";
import { TechProjectCard } from "./TechProjectCard";

export const TechProjects = () => {
  return (
    <section className={styles.container} id="tech-projects">
      <div className={styles.inner}>
        <h2 className={styles.title}>Research &amp; Papers</h2>
        <div className={styles.projects}>
          {projects.map((project, id) => (
            <TechProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
