import { useState } from 'react';
import axios from 'axios';
import './digimonbutton.css';

const DigimonButton = ({ onSelect }) => {
  const [digimon, setDigimon] = useState(null);

  const fetchDigimon = async () => {
    try {
      const response = await axios.get(
        `https://digimon-api.vercel.app/api/digimon/`
      );
      const data = await response.json();
      setDigimon(data);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const handleSelect = () => {
    if (onSelect) {
      onSelect(digimon);
    }
  };

  return (
    <div className="Digimon-btn">
      <button onClick={fetchDigimon}>Get Random Digimon</button>
      {digimon && (
        <div>
          <h2>{digimon.name}</h2>
          <img src={digimon.image} alt="image of digimon" />
          <button onClick={handleSelect}>Select Digimon</button>
        </div>
      )}
    </div>
  );
};

export default DigimonButton;
