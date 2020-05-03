import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleModal from './SimpleModal';
import { dummyVideo } from './Video';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SimpleModal
          buttonStr="watch video"
          content={
            <VideoCard video={dummyVideo} />
          } />
      </header>
    </div>
  );
}

export default App;
