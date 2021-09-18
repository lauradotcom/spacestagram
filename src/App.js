import React from 'react';
import './App.css';
import PostFeed from './PostFeed';
import RefreshButton from './RefreshButton';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <h1>Spacestagram</h1>
        <RefreshButton />
      </header>
      <PostFeed />
    </div>
  );
}

export default App;
