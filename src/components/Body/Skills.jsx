import React from 'react'
import { useSelector } from 'react-redux'

export default function Skills() {
  const skills = useSelector(state => state.data.skills);
  const titles = useSelector(state => state.data.titles);

  if (!skills || !titles) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{titles.skills}</h1>
      {skills.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}
