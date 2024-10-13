import React from "react";
import { useSelector } from "react-redux";

export default function Hero() {
  const hero = useSelector((state) => state.data.hero);
  const icon = [
    "fas fa-user visibility: hidden ",
    "fab fa-github icon-size",
    "fab fa-linkedin icon-size",
  ];

  return (
    <section className="flex lg:h-1/2 lg:mb-11 lg:mt-11 lg:flex-row flex-col">
      <div className="flex flex-col justify-between lg:gap-5 gap-5">
        <div className="flex items-center">
          <hr className="border-t-1 lg:w-1/12 w-1/4 mr-1 border-light-blue dark:border-dark-lightPurple" />
          <p className="text-xs lg:text-base font-medium text-light-blue dark:text-dark-lightPurple">
            {hero.name}
          </p>
        </div>
        <div className="flex gap-0 flex-col">
          <p className="font-bold lg:text-6xl text-3xl lg:w-7/8 w-full text-light-black dark:text-dark-blueGray">
            {hero.title1}
          </p>
          <p className="font-bold lg:text-6xl text-3xl lg:w-7/8 w-full text-light-black dark:text-dark-blueGray">
            {hero.title2}
          </p>
        </div>
        <div className="lg:w-4/5 w-full ">
          <p className="text-xs lg: text-lg leading-6 font-normal text-secondary dark:text-white">
            {hero.headerAbout}
          </p>
        </div>

        <div className="flex lg:w-2/3 w-full space-x-2 justify-center lg:justify-start mt-4 ">
          {hero.heroButtons.map((item, index) => (
            <a href={hero.links[index]} key={index}>
              <button className="text-xs lg:text-base bg-white text-tertiary border border-tertiary py-2 px-6 rounded flex items-center hover:bg-tertiary hover:text-white hover:border-transparent dark:bg-dark-darkGray dark:text-dark-lightGray dark:border dark:border-dark-lightGray hover:dark:text-black hover:dark:bg-dark-lightGray whitespace-nowrap">
                <i className={icon[index]}></i>
                {item}
              </button>
            </a>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-end mt-4 sm:justify-center">
        <div className="w-1/2 mt-5 lg:mt-0 md:w-2/3 lg:w-1/2">
          <img src="images/pp.png" className="rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}
