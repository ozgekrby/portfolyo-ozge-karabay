import React from "react";
import { useSelector } from "react-redux";

export default function Hero() {
  const hero = useSelector((state) => state.data.hero);

  return (
    <section className="flex h-1/2  mb-11 mt-11">
      <div className="flex flex-col justify-between gap-5">
        <div className="flex items-center ">
          <hr className="border-t-2 w-1/12 mr-1 border-light-blue" />
          {hero.name ? (
            <p className="font-medium text-light-blue">{hero.name}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="flex gap-0 flex-col">
          {hero.title1 ? (
            <p className="font-bold text-7xl w-3/4 text-light-black">
              {hero.title1}
            </p>
          ) : (
            <p>Loading...</p>
          )}
          {hero.title2 ? (
            <p className="font-bold text-7xl w-3/4 text-light-black">
              {hero.title2}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="w-2/3">
          {hero.headerAbout ? (
            <p className="font-normal text-secondary">{hero.headerAbout}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {hero.heroButtons ? (
          <div className="flex w-1/3 flex space-x-2">
            {hero.heroButtons.map((item, index) => (
              <button
                className="bg-white text-tertiary border border-tertiary py-2 px-4 rounded flex items-center hover:bg-tertiary hover:text-white hover:border-transparent dark:bg-dark-darkGray dark:text-dark-lightGray dark:border dark:border-dark-lightGray hover:dark:text-black hover:dark:bg-dark-lightGray"
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="w-1/2 ">
        <img
          src="src/data/images/pp.png"
          className="rounded-2xl w-full object-cover"
        />
      </div>
    </section>
  );
}
