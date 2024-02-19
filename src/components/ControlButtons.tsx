import "./ControlButtons.css";

const buttons: string[] = [
  "replay",
  "fast_rewind",
  "play_circle",
  "fast_forward",
  "shuffle",
];

function ControlButtons() {
  return (
    <div className="buttonsContainer">
      {buttons.map((button: string, index: number) => (
        <span key={index} className="material-icons">{button}</span>
      ))}
    </div>
  );
}

export default ControlButtons;
