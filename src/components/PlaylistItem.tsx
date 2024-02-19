import "./PlaylistItem.css";

interface ISong {
  id: number;
  artist: string;
  title: string;
  imgSrc: string;
  songLength: number; 
  currentTime: number;  
}

interface PlaylistItemProps {
  song: ISong;
}

function PlaylistItem({ song }: PlaylistItemProps){
  return (
    <article className="song-item">
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
