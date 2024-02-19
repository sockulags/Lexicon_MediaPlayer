import johnLegend from "../img/john_legend_dont_care.jpg";
import johnLegend2 from "../img/john_legend_save_room.jpg";
import likeWeUsedTo from "../img/On_Your_Side_album_cover.jpg";
import candyMan from "../img/Candyman.jpg";
import dakota from "../img/ragnbone_man.jpg";
import imagineDraongs from "../img/imagine_dragon_shots.jpg";


type Song = {
    id: number;
    artist: string;
    title: string;
    imgSrc: string;
    songLength: number; 
    currentTime: number; 
  };
  
  export const songs: Song[] = [
    {
      id: 1,
      artist: 'A Rocket to the Moon',
      title: 'Like We Used To',
      imgSrc: likeWeUsedTo,
      songLength: 242, 
      currentTime: 45, 
    },
    {
      id: 2,
      artist: 'John Legend',
      title: 'Save Room',
      imgSrc: johnLegend,
      songLength: 198, 
      currentTime: 30, 
    },
    {
        id: 3,
        imgSrc: likeWeUsedTo,
        artist: "A Rocket to the Moon",
        title: "Dakota",
        songLength: 198, // e.g., 3 minutes and 18 seconds
        currentTime: 90, // e.g., 30 seconds into the song
      },
      {
        id: 4,
        imgSrc: candyMan,
        artist: "Zedd & Aloe Blacc",
        title: "Candyman",
        songLength: 198, // e.g., 3 minutes and 18 seconds
        currentTime: 88, // e.g., 30 seconds into the song
      },
      {
        id: 5,
        imgSrc: dakota,
        artist: "Rag 'n' Bone Man",
        title: "Human",
        songLength: 198, // e.g., 3 minutes and 18 seconds
        currentTime: 125, // e.g., 30 seconds into the song
      },
      {
        id: 6,
        imgSrc: imagineDraongs,
        artist: "Imagine Dragons",
        title: "Shots (Broiler)",
        songLength: 198, // e.g., 3 minutes and 18 seconds
        currentTime: 100, // e.g., 30 seconds into the song
      },
      {
        id: 7,
        artist: 'A Rocket to the Moon',
        title: 'Like We Used To',
        imgSrc: likeWeUsedTo,
        songLength: 242, // e.g., 4 minutes and 2 seconds
        currentTime: 218, // e.g., 45 seconds into the song
      },
      {
        id: 8,
        artist: 'John Legend',
        title: 'Save Room',
        imgSrc: johnLegend2,
        songLength: 198, // e.g., 3 minutes and 18 seconds
        currentTime: 80, // e.g., 30 seconds into the song
      },
      {
          id: 9,
          imgSrc: likeWeUsedTo,
          artist: "A Rocket to the Moon",
          title: "Dakota",
          songLength: 198, // e.g., 3 minutes and 18 seconds
          currentTime: 10, // e.g., 30 seconds into the song
        },
    // Add other songs similarly
  ];
  
  