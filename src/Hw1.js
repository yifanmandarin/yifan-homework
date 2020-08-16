import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import video1 from './vdo/YM-story--who-ate-the-cake.mp4';
import audio1 from './vdo/audio/20200113-MFM-season.mp3';


export function Hw1() {
  return (
    <div>
      <div className="Homework">
        <h1>Homework 1</h1>
          <h2>Please read the content / listen to the audio below.</h2>
      </div>
      
      <body>
        <div>
          <video max-width="90vw" min-height="500vh" controls muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </body>
    </div>
  );
}

export function Hw2() {
  return (
    <div>
      <div className="Homework">
        <h1>Homework 2</h1>
          <h2>Please read the content / listen to the audio below.</h2>
      </div>
      
      <body>
        <div>
          <audio controls muted>
            <source src={audio1} type="audio/mp3" />
          </audio>
        </div>
      </body>
    </div>
  );
}
