import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        autoPlay
        muted
        ref={videoRef}
        onClick={handleVideoPress}
        className="video__player"
        loop
        type="video/mp4"
        src="videoone.mp4"
      ></video>

      {/**Video Footer */}
      <VideoFooter />
      {/**Video Sidebar */}
      <VideoSidebar />
    </div>
  );
}

export default Video;
