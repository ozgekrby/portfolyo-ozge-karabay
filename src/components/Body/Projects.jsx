import React from 'react';
import { useSelector } from 'react-redux';

export default function Projects() {
  const projects = useSelector(state => state.data.projects);
  const titles = useSelector(state => state.data.titles);

  if (!projects || !titles) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{titles.projects}</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.img} alt={project.title} />
          <p>{project.title}</p>
          <p>{project.description}</p>

          {project.technologies.map((tech, techIndex) => (
            <button key={techIndex}>
              {tech}
            </button>
          ))}
          <a href={project.github} >GitHub</a>
          <a href={project.viewSite} >View Site</a>
        </div>
      ))}
    </div>
  );
}
