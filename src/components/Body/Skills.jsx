import React from "react";
import { useSelector } from "react-redux";

export default function Skills() {
  const skills = useSelector((state) => state.data.skills);
  const titles = useSelector((state) => state.data.titles);

  return (
    <section
      className="flex flex-col lg:gap-9 gap-5 items-start"
      id="skills-section"
    >
      <div>
        <h2 className="lg:text-5xl text-3xl font-semibold text-light-black text-left dark:text-dark-blueGray">
          {titles.skills}
        </h2>
      </div>
      <div className="flex flex-wrap lg:justify-between gap-5">
        {skills.map((item, index) => (
          <div key={index} className="lg:w-1/4 w-full flex flex-col gap-5">
            <p className="lg:text-3xl text-2xl font-medium text-left tracking-wider text-primary dark:text-dark-softPurple">
              {item.title}
            </p>
            <p className="text-xs font-normal text-left text-secondary dark:text-white">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
