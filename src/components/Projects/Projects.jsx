import React from "react";

import styles from "./Projects.module.css";
import effects from "../../styles/effects.module.css";
import { projects } from "../../data/projects.js";
import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";

export const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(`.${styles.slideIn}`)
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section className={styles.container} id="projects">
      <h1 className={`${styles.title} ${styles.slideIn}`}>PROJECTS</h1>
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
