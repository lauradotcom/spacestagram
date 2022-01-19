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
      <footer className="App-footer">
        <p>Created by <a target="_blank" rel="noreferrer" href="https://laurahawkins.dev">Laura Hawkins</a> using NASA's Photo of the Day API</p>
        <p><a target="_blank" rel="noreferrer" href="https://github.com/lauradotcom/spacestagram"><span class="fab fa-github"></span></a></p>
      </footer>
    </div>
  );
}

export default App;
