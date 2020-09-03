import React, { useRef, useState } from 'react';
import './index.css';
import VideoFooter from '../VideoFooter';
import VideoSidebar from '../VideoSidebar';

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares
}) => {
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
        src={url}
      >
      </video>
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VideoFooter
        channel={channel}
        description={description}
        song={song}
      />
    </div>
  );
}

export default Video;
