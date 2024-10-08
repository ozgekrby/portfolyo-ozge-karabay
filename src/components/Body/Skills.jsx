import React from "react";
import { useSelector } from "react-redux";

export default function Skills() {
  const skills = useSelector((state) => state.data.skills);
  const titles = useSelector((state) => state.data.titles);

  if (!skills || !titles) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col gap-5" id="skills-section">
      <h2 className="lg:text-5xl text-3xl font-semibold text-light-black text-left">
        {titles.skills}
      </h2>
      <div className="flex flex-wrap lg:justify-between justify-center">
        {skills.map((item, index) => (
          <div key={index} className="lg:w-1/4 w-full p-2 flex flex-col gap-5">
            <p className="lg:text-3xl text-2xl font-medium text-left tracking-wider text-primary">
              {item.title}
            </p>
            <p className="text-xs font-normal text-left text-secondary">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
