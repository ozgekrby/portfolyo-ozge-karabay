import React from 'react'
import { useSelector } from 'react-redux';

export default function Hero() {
const hero = useSelector(state => state.data.hero);

  return (
    <div>
    {hero.name ? <p>{hero.name}</p> : <p>Loading...</p>}
    {hero.title1 ? <p>{hero.title1}</p> : <p>Loading...</p>}
    {hero.title2 ? <p>{hero.title2}</p> : <p>Loading...</p>}
    {hero.headerAbout ? <p>{hero.headerAbout}</p> : <p>Loading...</p>}
  
    {hero.heroButtons ? (
      <div>
        {hero.heroButtons.map((item, index) => (
          <span key={index}>{item}</span> 
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}
