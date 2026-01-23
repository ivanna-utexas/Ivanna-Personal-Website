import React from "react";

import styles from "./Projects.module.css";
import { projects } from "C:/Users/ivann/OneDrive/Desktop/Ivanna-Aleman-Coronado/Ivanna-Personal-Website/src/data/projects.js";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>PROJECTS</h1>
      <div className={styles.horizontalScroll}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
