import React from "react";
import "./searchbox.css";

function SearchBox() {
  return (
    <div className="searchbox">
      <input type="text" placeholder="Digimon Name" />
      <button className="search">🔎</button>
    </div>
  );
}

export default SearchBox;
