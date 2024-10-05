import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
  const footer = useSelector(state => state.data.footer);
  if (!footer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{footer.catchword}</h1>
      <p>{footer.mail}</p>
      {footer.links && footer.links.map((item, index) => (
        <div key={index}>
          <a href="#">
            {item}
          </a>
        </div>
      ))}
    </div>
  );
}
