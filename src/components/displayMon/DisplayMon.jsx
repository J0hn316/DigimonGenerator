import PlayButton from "../play/PlayButton";
import "./displaymon.css";

function DisplayMon({ digimon }) {
  function loaded() {
    return (
      <div className="displayMon">
        <h1>{digimon[0]?.name}</h1>
        <p>Level: {digimon[0]?.level}</p>
        <img src={digimon[0]?.img} alt="Digimon" />
        <PlayButton />
      </div>
    );
  }
  function loading() {
    return <h1>No Digimon to display</h1>;
  }

  return digimon ? loaded() : loading();
}

export default DisplayMon;
