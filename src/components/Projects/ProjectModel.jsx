import styles from "./ProjectModel.module.css";

export default function ProjectModel({ project, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.model} onClick={(e) => e.stopPropagation()}>
        <div className={styles.topCircle}></div>
        <div className={styles.bottomCircle}></div>
        <button className={styles.close} onClick={onClose}>
          <span />
          <span />
        </button>
        <div className={styles.content}>
          <div className={styles.left}>
            <h3>{project.title}</h3>
            <div className={styles.preview}>
              {project.PreviewType === "image" && (
                <img src={project.PreviewSRC} alt="Preview" />
              )}
              {project.PreviewType === "iFrame" && (
                <iframe
                  src={project.PreviewSRC}
                  title={project.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              {project.PreviewType === "video" && (
                <video src={project.PreviewSRC} controls />
              )}
            </div>

            <div className={styles.links}>
              {project.GitHub && <a href={project.GitHub}>VIEW CODE</a>}
            </div>
            <div className={styles.language}>
              <h3>LANGUAGE</h3>
              <p>{project.Language}</p>
            </div>
            <div className={styles.language}>
              <h3>PROGRAMS</h3>
              {project.Technology.map((tech, i) => (
                <li className={styles.tech} key={i}>
                  {tech}
                </li>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.information}>
              <h3>Background Information</h3>
              <p>{project.Background}</p>
            </div>
            <div className={styles.information}>
              <h3>Focus</h3>
              <p>{project.Focus}</p>
            </div>
            <div className={styles.information}>
              <h3>Conclusion</h3>
              <p>{project.Conclusion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
