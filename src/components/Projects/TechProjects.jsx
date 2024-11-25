import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/techprojects.json";
import { TechProjectCard } from "./TechProjectCard";

export const TechProjects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Technical Communication Projects</h2>
      <div className={styles.projects}>
        {techprojects.map((project, id) => {
          return <TechProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
