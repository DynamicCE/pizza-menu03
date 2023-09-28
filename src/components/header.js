import React from "react";
export default function Header() {
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  ); // css usage.
}

const style = { color: "red", fontSize: "32px", textTransform: "uppercase" }; // internal css usage.
