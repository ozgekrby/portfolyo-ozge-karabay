import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const header = useSelector((state) => state.data.header);

  if (!header.nav || header.nav.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <header className="flex items-end p-4 space-y-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-light-lavender dark:bg-primary">
          <div className="text-2xl font-bold rotate-30 text-light-lightpink dark:text-dark-periwinkle">
            O
          </div>
        </div>
      </div>
      <nav className="flex w-2/3 justify-between text-secondary font-medium" aria-label="Main Navigation">
        {header.nav.map((item, index) => (
          <p key={index} className="hover:text-light-blue transition-colors" role="menuitem">
            {item}
          </p>
        ))}
      </nav>
    </header>
  );
}
