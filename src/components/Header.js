import React from "react";
import "../styles/Header.css"

function Header() {
  return (
    <header className="header">
      <h2 className="heading">Employee Directory</h2>
      <p className = "intro">Click to filter by heading or use the search box.</p>
    </header>
  )
}

export default Header;