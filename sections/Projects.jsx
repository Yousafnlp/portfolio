import React from "react";
import ProjectItem from "../components/commen/ProjectItem";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectItem
              key={project.link}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
