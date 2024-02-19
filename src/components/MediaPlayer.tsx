import PlayingSongImage from "./PlayingSongImage";
import Navbar from "./Navbar";
import SongInfo from "./SongInfo";
import SongDuration from "./SongDuration";
import ControlButtons from "./ControlButtons";
import image from "../img/Candyman.jpg";
import "./MediaPlayer.css";

function MediaPlayer() {
  return (
    <main>
    <Navbar/>
    <PlayingSongImage imgSource={image}/>
    <SongInfo title={"A Rocket to the mooon"} artist={"Like we used to"}/>
    <SongDuration songLength={214} currentTime={20}/>
    <ControlButtons/>
    </main>
  );
}

export default MediaPlayer;