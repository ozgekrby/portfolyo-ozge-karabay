import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const profile = useSelector((state) => state.data.profile);
  const titles = useSelector((state) => state.data.titles);

  if (!profile || !titles) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col gap-5">
      <hr className="mt-6 border-t border-dark-lightPurple" />
      <h2 className="text-5xl font-semibold text-light-black text-left">
        {titles.profile}
      </h2>
      <div className="flex gap-10">
        <div className="w-1/3 flex flex-col gap-5">
          <h3 className="text-3xl font-medium text-left tracking-wider text-primary">
            {titles.subProfile}
          </h3>
          <div className="flex flex-col">
            {profile.subProfile &&
              profile.subProfile.map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-1/2">
                    <strong>{item.title}:</strong>
                  </div>
                  <div className="w-1/2">
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          {profile.about && (
            <>
              <h3 className="text-3xl font-medium text-left tracking-wider text-primary">
                {profile.about.title}
              </h3>
              <p className="text-s font-normal text-left text-secondary">
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
