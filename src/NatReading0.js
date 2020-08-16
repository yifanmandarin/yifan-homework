import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import read1 from './img/nat-read-1.PNG';
import read2 from './img/nat-read-2.PNG';


export function nReading1() {
  return (
    <div>
      <div className="Reading">
        <h1>Reading 1</h1>
          <h2>Please read the following passage and answer the questions.</h2>
      </div>
      
      <body>
        <div>
          <img src={read1} alt="reading 1" width="1000" />
        </div>
      </body>
    </div>
  );
}

export function nReading2() {
    return (
        <div>
          <div className="Reading">
            <h1>Reading 2</h1>
              <h2>Please read the following passage and answer the questions.</h2>
          </div>
          
          <body>
            <div>
              <img src={read2} alt="reading 2" width="1000" />
            </div>
          </body>
        </div>
      );
}

