import React, { useRef, useState } from 'react';
import './index.css';
import VideoFooter from '../VideoFooter';

const Video = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={handleVideoPress}
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/626ed09e2f2b45b7098f2a2638c45005/5f5185fd/video/tos/useast2a/tos-useast2a-pve-0068/49ba09ce3adf4304ad49d4ba59fdf203/?a=1233&br=3296&bt=1648&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200903181027010190186142491A9A1F&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M288NmhybmxndzMzNTczM0ApO2k4OGczPGU3NzxkMzk0OmdfaDFzYy0waTRfLS0wMTZzczAzMTIuNTFgNjJiMy4yYWE6Yw%3D%3D&vl=&vr=">
      </video>
      {/* videosidebar */}
      <VideoFooter />
    </div>
  );
}

export default Video;
