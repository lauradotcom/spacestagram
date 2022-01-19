import React from 'react';
import './App.css';
import PostFeed from './PostFeed';
import RefreshButton from './RefreshButton';
import Delayed from './Delayed';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <h1>Spacestagram</h1>
        <div></div>
      </header>
      <PostFeed />
      <Delayed>
        <RefreshButton />
      </Delayed>
    </div>
  );
}

export default App;
