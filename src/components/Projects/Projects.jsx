import React from "react";

import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css"

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Prjects</h2>
      <div className={styles.projects}>
        {projects.map((projects, id) => {
          return (
            <ProjectCard key={id} projects={projects}/>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
