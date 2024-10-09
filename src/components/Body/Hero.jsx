import React from "react";
import { useSelector } from "react-redux";

export default function Hero() {
  const hero = useSelector((state) => state.data.hero);
  const icon=["","fab fa-github icon-size","fab fa-linkedin icon-size"]

  return (
    <section className="flex lg:h-1/2 lg:mb-11 lg:mt-11 lg:flex-row flex-col">
      <div className="flex flex-col justify-between lg:gap-5 gap-3">
        <div className="flex items-center">
          <hr className="border-t-1 lg:w-1/12 w-1/4 mr-1 border-light-blue dark:border-dark-lightPurple" />
          {hero.name ? (
            <p className="font-medium text-light-blue dark:text-dark-lightPurple">{hero.name}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="flex gap-0 flex-col">
          {hero.title1 ? (
            <p className="font-bold lg:text-7xl text-5xl lg:w-3/4 w-full text-light-black dark:text-dark-blueGray">
              {hero.title1}
            </p>
          ) : (
            <p>Loading...</p>
          )}
          {hero.title2 ? (
            <p className="font-bold lg:text-7xl text-5xl lg:w-3/4 w-full text-light-black dark:text-dark-blueGray">
              {hero.title2}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="lg:w-2/3 w-full ">
          {hero.headerAbout ? (
            <p className="font-normal text-secondary dark:text-white">{hero.headerAbout}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {hero.heroButtons ? (
          <div className="flex lg:w-1/3 w-full space-x-2">
            {hero.heroButtons.map((item, index) => (
              <a href={hero.links[index]} key={index}>
              <button
                className="bg-white text-tertiary border border-tertiary py-2 px-4 rounded flex items-center hover:bg-tertiary hover:text-white hover:border-transparent dark:bg-dark-darkGray dark:text-dark-lightGray dark:border dark:border-dark-lightGray hover:dark:text-black hover:dark:bg-dark-lightGray"
                
              >
                 <i className={icon[index]}></i>
                {item}
              </button>
              </a>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="lg:w-1/2 w-full mt-5 lg:mt-0">
        <img
          src="src/data/images/pp.png"
          className="rounded-2xl w-full object-cover"
        />
      </div>
    </section>
  );
}
