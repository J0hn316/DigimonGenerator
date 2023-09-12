import Music from "../../../Audio/Digimon.mp3";

function PlayButton() {
  return (
    <div>
      <audio controls src={Music} typeof="audio/mp3">
        Music
      </audio>
    </div>
  );
}

export default PlayButton;
