import { useState } from "react";
import styles from "./ProjectCard.module.css";
import effects from "../../styles/effects.module.css";
import ProjectModel from "./ProjectModel";

import starlingLabThumbnail from "../../assets/projects/StarlingLabThumbnail.png"
import TicTacToeThumbnail from "../../assets/projects/TicTacToeThumbnail.png"
import SnakeThumbnail from "../../assets/projects/SnakeThumbnail.png"
import SquirrelThumbnail from "../../assets/projects/Squirrel++Thumbnail.png"

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.card} onClick={() => setOpen(true)}>
        <div className={styles.content}>
          <div className={styles.topCircle}></div>
          <svg
            className={styles.arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="25"
            viewBox="0 0 18 25"
            fill="none"
          >
            <path
              d="M11.4544 12.5001L0 2.77778L3.2727 0L18 12.5001L3.2727 25L0 22.2222L11.4544 12.5001Z"
              fill="#9784B6"
            />
          </svg>
          <img src={project.thumbnail} alt={project.title} />
          <h3 className={styles.title}>{project.title}</h3>
          <p>{project.Description}</p>
          <ul className={styles.technology}>
            {project.Technology.map((tech, i) => (
              <li className={`${styles.tech} ${effects.pop}`} key={i}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        {open && (
          <ProjectModel
            className={styles.open}
            project={project}
            onClose={() => setOpen(false)}
          />
        )}
      </div>
    </>
  );
}
