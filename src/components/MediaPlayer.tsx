import PlayingSongImage from "./PlayingSongImage";
import Navbar from "./Navbar";
import SongInfo from "./SongInfo";
import SongDuration from "./SongDuration";
import ControlButtons from "./ControlButtons";
import { songs, ISong } from "../data/Songs";
import "./MediaPlayer.css";

interface MediaPlayerProps {
  activeSong: ISong | null;
}

function MediaPlayer({ activeSong }: MediaPlayerProps) {
    if(!activeSong){
        return (
            <main>
            <Navbar/>
            <PlayingSongImage imgSource={songs[0].imgSrc}/>
            <SongInfo title={songs[0].title} artist={songs[0].artist}/>
            <SongDuration songLength={songs[0].songLength} currentTime={songs[0].currentTime}/>
            <ControlButtons/>
          </main>
        );
    } 
  return (
    <main>
      <Navbar/>
      <PlayingSongImage imgSource={activeSong.imgSrc}/>
      <SongInfo title={activeSong.title} artist={activeSong.artist}/>
      <SongDuration songLength={activeSong.songLength} currentTime={activeSong.currentTime}/>
      <ControlButtons/>
    </main>
  );
}

export default MediaPlayer;
