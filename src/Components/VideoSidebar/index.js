import React, { useState } from 'react';
import './index.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSidebar = ({ likes, shares, messages }) => {
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
        <p>{isLiked ? likes+1 : likes}</p>
      </div>

      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>

      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
      <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
