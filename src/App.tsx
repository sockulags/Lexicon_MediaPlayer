import  { useState } from 'react';
import MediaPlayer from './components/MediaPlayer';
import Playlist from './components/Playlist';
import { songs } from './data/Songs';

export function App() {
  const [activeSongId, setActiveSongId] = useState<number | null>(null);

  const handleActiveSongChange = (id: number) => {
    setActiveSongId(id);
  };

    const activeSong = songs.find(song => song.id === activeSongId) || null;

  return (
    <>   
      <MediaPlayer activeSong={activeSong} />
      <Playlist songs={songs} onActiveSongChange={handleActiveSongChange} />
    </>
  );
}
