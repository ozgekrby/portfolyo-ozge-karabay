import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const header = useSelector((state) => state.data.header);

  const id = ["skills-section", "projects-section", "contact-section"];

  return (
    <header className="flex items-center">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-light-lavender dark:bg-primary">
          <div className="text-lg lg:text-2xl font-bold rotate-30 text-light-lightpink dark:text-dark-periwinkle">
            O
          </div>
        </div>
      </div>
      <nav
        className="flex w-2/3 justify-between text-secondary font-medium "
        aria-label="Main Navigation"
      >
        {header.nav.map((item, index) => (
          <p
            key={index}
            className="text-xs sm:text-base md:text-lg lg:text-xl hover:text-light-blue transition-colors cursor-pointer hover:border dark:border-none py-2 px-4 rounded flex items-center dark:text-secondary dark:border hover:dark:text-black hover:dark:bg-dark-lightGray"
            role="menuitem"
            onClick={() => {
              const element = document.getElementById(id[index]);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {item}
          </p>
        ))}
      </nav>
    </header>
  );
}
