import PlaylistItem from "./PlaylistItem"; 
import "./Playlist.css";

interface ISong {
  id: number;
  artist: string;
  title: string;
  imgSrc: string;
  songLength: number; 
  currentTime: number;  
}

interface PlaylistProps {
  songs: ISong[];
}

function Playlist({ songs }:PlaylistProps){
  return (
    <section className="play-list">
      {songs.map((song) => (
        <PlaylistItem key={song.id} song={song} />
      ))}
    </section>
  );
}

export default Playlist;
