import "./SongInfo.css";

interface SongInfoProps {
    title: string;
    artist: string;
}

function SongInfo({title, artist} : SongInfoProps) {
  return (
    <article className="song-info-container">
          <span className="material-icons">add_circle_outline</span>
          <div className="song-info">
            <p className="upper-text">{title}</p>
            <p className="lower-text">{artist}</p>
          </div>
          <span className="material-icons">favorite</span>
    </article>
  );
}

export default SongInfo;