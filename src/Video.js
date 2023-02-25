import React from "react";
import "./Video.css";
function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRed.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        src=""
      ></video>

      {/**Videofooter */}
      {/**VideoSidebar */}
    </div>
  );
}

export default Video;
