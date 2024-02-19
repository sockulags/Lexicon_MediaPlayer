import PlaylistItem from "./PlaylistItem"; 
import "./Playlist.css";
import { ISong } from '../data/Songs'; 

interface PlaylistProps {
  songs: ISong[];
  onActiveSongChange: (id: number) => void;
}

function Playlist({ songs, onActiveSongChange }: PlaylistProps) {
  return (
    <section className="play-list">
      {songs.map((song) => (
        <PlaylistItem key={song.id} song={song} onActiveSongChange={onActiveSongChange} />
      ))}
    </section>
  );
}

export default Playlist;

