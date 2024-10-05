import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const profile = useSelector(state => state.data.profile);
  const titles = useSelector(state => state.data.titles);

  if (!profile || !titles) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{titles.profile}</h1>
      <div>
        <h2>{titles.subProfile}</h2>
        <ul>
          {profile.subProfile && profile.subProfile.map((item, index) => (
            <li key={index}>
              <strong>{item.title}: </strong> {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {profile.about && (
          <>
            <h2>{profile.about.title}</h2>
            <p>{profile.about.content}</p>
          </>
        )}
      </div>
    </div>
  );
}
