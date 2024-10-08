import React from "react";
import { useSelector } from "react-redux";

export default function Skills() {
  const skills = useSelector((state) => state.data.skills);
  const titles = useSelector((state) => state.data.titles);

  if (!skills || !titles) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-5xl font-semibold text-light-black text-left">
        {titles.skills}
      </h2>
      <div className="flex justify-between">
        {skills.map((item, index) => (
          <div key={index} className="flex flex-col gap-5 w-1/4">
            <p className="text-3xl font-medium text-left tracking-wider text-primary">
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
