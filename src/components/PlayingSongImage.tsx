import "./PlayingSongImage.css";

interface ImageSrc {
    imgSource: string;
}


function PlayingSongImage({imgSource}: ImageSrc) {
  return (
    <div className="image-container">
        <img src={imgSource}/>
    </div>
  );
}

export default PlayingSongImage;