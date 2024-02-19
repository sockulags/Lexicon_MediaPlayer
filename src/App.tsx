import MediaPlayer from "./components/MediaPlayer";
import Playlist from "./components/Playlist";
import { songs } from "./data/Songs";



export function App() {
  return (
    <>     
      <MediaPlayer/>
      <Playlist songs={songs}/>
    </>
  );
}
