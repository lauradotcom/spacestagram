import React from 'react';
import './RefreshButton.css';

const RefreshButton = (loading) => {

  const refreshFeed = () => {
    window.location.reload(true);
  }

  return (
    <button
      onClick={refreshFeed}
      className="fas fa-redo-alt"
      title="Load more posts"
    >
    </button>
  )
}

export default RefreshButton;