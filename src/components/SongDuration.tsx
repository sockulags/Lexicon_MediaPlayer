import "./SongDuration.css";

interface SongDurationProps {
    songLength: number;
    currentTime: number;
}

const convertToSecondsAsString = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = remainingSeconds.toString().padStart(2, '0');
  
    return `${paddedMinutes}:${paddedSeconds}`;
  };

function SongDuration({songLength, currentTime}: SongDurationProps) {
  const length = convertToSecondsAsString(songLength);
  const currTime = convertToSecondsAsString(currentTime);
  const progress = (currentTime / songLength) * 100;

  return (
    <article className="timeline-container">
    <span>{currTime}</span>
    <div className="outer-timeline">
        <div className="inner-timeline" style={{ width: `${progress}%` }}></div>
      </div>
    <span>{length}</span>
  </article>
  );
}
export default SongDuration;