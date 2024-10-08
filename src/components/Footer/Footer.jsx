import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const footer = useSelector((state) => state.data.footer);

  if (!footer) {
    return <div>Loading...</div>;
  }

  const colors = ["text-light-dark","text-light-green","text-light-azure"];

  return (
    <section className="flex flex-col pt-11 px-20 md:px-20 lg:px-50 bg-light-beige">
      <div className="w-11/12 m-auto">
      <div className="px-10 w-2/5">
        <h3 className="text-4xl font-semibold text-left">{footer.catchword}</h3>
      </div>
      <div className="px-10 flex justify-between pt-10">
        <p className="text-lg font-medium tracking-wide text-left underline text-light-red"><span>👉</span>{footer.mail}</p>
        <div className="flex space-x-2 text-base font-medium tracking-tight text-left">
        {footer.links &&
          footer.links.map((item, index) => (
            <div key={index}>
              <a href="#" className={colors[index % colors.length]}>{item}</a>
            </div>
          ))}
          </div>
      </div>
      </div>
    </section>
  );
}
