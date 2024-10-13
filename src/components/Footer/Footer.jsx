import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const footer = useSelector((state) => state.data.footer);
  const colors = [
    "text-light-dark dark:text-dark-lightPurple",
    "text-light-green dark:text-dark-green",
    "text-light-azure dark:text-dark-aquaBlue",
  ];

  return (
    <section
      className="flex flex-col bg-light-beige dark:bg-slate-900 lg:py-9"
      id="contact-section"
    >
      <div className="w-4/5 m-auto gap-9">
        <div className=" w-full lg:w-2/5">
          <h3 className="text-4xl font-semibold text-left dark:text-dark-blueGray">
            {footer.catchword}
          </h3>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between pt-10">
          <p className="text-lg font-medium tracking-wide text-left underline text-light-red dark:text-dark-lightPurple">
            <span>👉</span>
            {footer.mail}
          </p>
          <div className="flex flex-wrap justify-between space-x-2 text-base font-medium tracking-tight text-left">
            {footer.links &&
              footer.links.map((item, index) => (
                <div key={index}>
                  <a href="#" className={colors[index % colors.length]}>
                    {item}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
