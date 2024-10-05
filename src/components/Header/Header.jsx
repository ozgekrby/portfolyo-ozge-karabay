import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const header = useSelector((state) => state.data.header);

  if (!header.nav || header.nav.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {header.nav.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
