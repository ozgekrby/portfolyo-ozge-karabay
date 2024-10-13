import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const profile = useSelector((state) => state.data.profile);
  const titles = useSelector((state) => state.data.titles);
  return (
    <section className="flex flex-col lg:gap-9 gap-5 ">
      <hr className="mt-6 border-t border-dark-lightPurple lg:mb-4" />
      <h2 className="lg:text-5xl text-3xl font-semibold text-light-black text-left dark:text-dark-blueGray">
        {titles.profile}
      </h2>
      <div className="lg:flex-row flex-col flex lg:gap-10 gap-5">
        <div className="lg:w-1/3 w-full flex flex-col gap-3">
          <h3 className="lg:text-3xl text-2xl font-medium text-left tracking-wider text-primary dark:text-dark-softPurple">
            {titles.subProfile}
          </h3>
          <div className="flex flex-col gap-3">
            {profile.subProfile &&
              profile.subProfile.map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-1/2 dark:text-white flex">
                    <strong>{item.title}:</strong>
                  </div>
                  <div className="w-1/2 dark:text-white">
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col gap-5">
          {profile.about && (
            <>
              <h3 className="lg:text-3xl text-2xl font-medium text-left tracking-wider text-primary dark:text-dark-softPurple">
                {profile.about.title}
              </h3>
              <p className="lg:text-s text-xs font-normal text-left text-secondary dark:text-white">
                {profile.about.content}
              </p>
            </>
          )}
        </div>
      </div>
      <hr className="mt-6 mb-6 border-t border-dark-lightPurple" />
    </section>
  );
}
