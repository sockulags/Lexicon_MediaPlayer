import "./PlaylistItem.css";
import { ISong } from "../data/Songs"

interface PlaylistItemProps {
  song: ISong;
  onActiveSongChange: (id: number) => void;
}

function PlaylistItem({ song, onActiveSongChange }: PlaylistItemProps) {
  return (
    <article className="song-item" onClick={() => onActiveSongChange(song.id)}>
      <figure><img src={song.imgSrc} alt={`${song.artist} - ${song.title}`} /></figure>
      <div className="song-info">
        <p className="upper-text">{song.artist}</p>
        <p className="lower-text">{song.title}</p>
      </div>
      <span className="material-icons play">play_circle_filled</span>
    </article>
  );
}

export default PlaylistItem;
