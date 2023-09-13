import React, { useEffect, useState } from "react";
import SearchBar from "./components/searchbox/SearchBar";
import DisplayMon from "./components/displayMon/DisplayMon";
import BackGround from "./components/background/BackGound";
import "./app.css";

function App() {
  const [item, setItem] = useState([]);

  const getMon = async (name) => {
    try {
      const response = await fetch(
        `https://digimon-api.vercel.app/api/digimon/name/${name}`
      );
      const data = await response.json();
      setItem(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMon("Agumon");
  }, []);

  return (
    <div className="App">
      <BackGround />
      <SearchBar searchMon={getMon} />
      <DisplayMon digimon={item} />
    </div>
  );
}

export default App;
