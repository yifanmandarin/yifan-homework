import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import { Link } from 'react-router-dom';


function Nat_read() {
    
    const listyle = {
        margin: "5px"
    }
  
    return (
    <div>
      <div className="Reading">
        <h1>Reading for International students</h1>
          <h2>Please select the corresponding reading and answer the questions below each quiz.</h2>
      </div>
      
      <body>
        <div>
          <ul >
              <Link to="/yifan-homework/reading/native/reading1"><li style={listyle}>2020.9.2.</li></Link>
              <Link to="/yifan-homework/reading/native/reading2"><li style={listyle}>2020.9.9.</li></Link>
          </ul>
        </div>
      </body>
    </div>
  );
}

export default Nat_read;