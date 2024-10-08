import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const footer = useSelector((state) => state.data.footer);

  if (!footer) {
    return <div>Loading...</div>;
  }

  const colors = ["text-light-dark dark:text-dark-lightPurple", "text-light-green dark:text-dark-green", "text-light-azure dark:text-dark-aquaBlue"];

  return (
    <section className="flex flex-col pt-11 px-4 md:px-10 lg:px-20 bg-light-beige dark:bg-slate-900" id="contact-section">
      <div className="w-11/12 m-auto">
        <div className="px-4 w-full lg:w-2/5">
          <h3 className="text-4xl font-semibold text-left dark:text-dark-blueGray">{footer.catchword}</h3>
        </div>
        <div className="px-4 flex flex-col lg:flex-row justify-between pt-10">
          <p className="text-lg font-medium tracking-wide text-left underline text-light-red dark:text-dark-lightPurple">
            <span>👉</span>{footer.mail}
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
