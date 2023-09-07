import React, { useEffect, useState } from "react";
import SearchBox from "./components/searchbox/SearchBox";
import DisplayMon from "./components/displayMon/DisplayMon";

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
      <SearchBox searchMon={getMon} />
      <DisplayMon digimon={item} />
    </div>
  );
}

export default App;
