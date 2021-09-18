import React from 'react';
import './RefreshButton.css';

const RefreshButton = () => {

  const refreshFeed = () => {
    window.location.reload(true);
  }

  return (
    <button
      onClick={refreshFeed}
      className="fas fa-redo-alt"></button>
  )
}

export default RefreshButton;