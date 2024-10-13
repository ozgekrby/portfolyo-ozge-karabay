import React from "react";
import { useSelector } from "react-redux";

export default function Projects() {
  const projects = useSelector((state) => state.data.projects);
  const titles = useSelector((state) => state.data.titles);

  return (
    <section
      id="projects-section"
      className="flex flex-col lg:gap-9 lg:mb-7 gap-5"
    >
      <h2 className="lg:text-5xl text-3xl font-semibold text-light-black text-left mb-4 dark:text-dark-blueGray ">
        {titles.projects}
      </h2>
      <div className="flex flex-wrap lg:flex-row justify-between sm:flex-col sm:m-auto lg:-w-full h-3/4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="lg:w-1/4 w-full flex flex-col gap-4 lg:mb-0 mb-6"
          >
            <div className="overflow-hidden relative h-48 lg:h-64">
              <img
                src={project.img}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="lg:text-3xl text-2xl font-medium text-left tracking-wider text-primary dark:text-dark-softPurple">
              {project.title}
            </p>
            <div className="w-full h-1/3">
              <p className="text-xs font-normal text-left text-secondary dark:text-white">
                {project.description}
              </p>
            </div>

            <div className="flex space-x-2">
              {project.technologies.map((tech, techIndex) => (
                <button
                  key={techIndex}
                  className="bg-white text-tertiary border border-tertiary py-1 px-2 rounded flex items-center hover:bg-tertiary hover:text-white hover:border-transparent dark:bg-dark-darkGray dark:text-dark-periwinkle dark:border dark:border-dark-periwinkle hover:dark:text-black hover:dark:bg-dark-lightGray"
                >
                  {tech}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={project.github}
                className="text-tertiary underline font-medium dark:text-dark-lightGray"
              >
                GitHub
              </a>
              <a
                href={project.viewSite}
                className="text-tertiary underline font-medium dark:text-dark-lightGray"
              >
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
