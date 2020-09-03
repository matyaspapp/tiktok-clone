import React, { useState } from 'react';
import './index.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSidebar = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {
          isLiked
            ? <FavoriteIcon
                fontSize="large"
                onClick={(e) => setIsLiked(false)}
              />
            : <FavoriteBorderIcon
                fontSize="large"
                onClick={(e) => setIsLiked(true)}
              />
        } 
        <p>{isLiked ? 420 : 419}</p>
      </div>

      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>11</p>
      </div>

      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>23</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
