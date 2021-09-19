import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {

  const unliked = 'far fa-heart';
  const liked = 'fas fa-heart liked';

  const [like, setLike] = useState(false);
  const [heartClass, setHeartClass] = useState(unliked);
  console.log(like);

  const handleClick = (event) => {
    event.preventDefault();
    if (like === false) {
      setLike(true);
      setHeartClass(liked);
    } else {
      setLike(false);
      setHeartClass(unliked);
    }
  }

  return(
    <button 
      className={heartClass} 
      aria-label="like"
      onClick={handleClick}
    >
    </button>
  )
}

export default LikeButton;