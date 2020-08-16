import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import { Link } from 'react-router-dom';

export function Int_hw_month() {
    const listyle = {
      padding: "5px",
      fontSize: "3vh"
    }

    return (
    <div>
      <div className="Reading">
        <h1>Homework for International students</h1>
          <h2>Please select the corresponding reading and answer the questions below each quiz.</h2>
      </div>
      
      <body>
        <div>
          <ul>
              <Link to="/yifan-homework/homework/international/sep20"><li style={listyle}>2020.9</li></Link>
              <Link to="/yifan-homework/homework/international/oct20"><li style={listyle}>2020.10</li></Link>
              <Link to="/yifan-homework/homework/international/nov20"><li style={listyle}>2020.11</li></Link>
              <Link to="/yifan-homework/homework/international/dec20"><li style={listyle}>2020.12</li></Link>
              <Link to="/yifan-homework/homework/international/jan21"><li style={listyle}>2021.1</li></Link>
          </ul>
        </div>
      </body>
    </div>
    );
}

export function Nat_hw_month() {
    const listyle = {
      padding: "5px",
      fontSize: "3vh"
    }

    return (
    <div>
      <div className="Reading">
        <h1>Homework for International students</h1>
          <h2>Please select the corresponding reading and answer the questions below each quiz.</h2>
      </div>
      
      <body>
        <div>
          <ul >
              <Link to="/yifan-homework/homework/native/sep20"><li style={listyle}>2020.9</li></Link>
              <Link to="/yifan-homework/homework/native/oct20"><li style={listyle}>2020.10</li></Link>
              <Link to="/yifan-homework/homework/native/nov20"><li style={listyle}>2020.11</li></Link>
              <Link to="/yifan-homework/homework/native/dec20"><li style={listyle}>2020.12</li></Link>
              <Link to="/yifan-homework/homework/native/jan21"><li style={listyle}>2021.1</li></Link>
          </ul>
        </div>
      </body>
    </div>
    );
}

function Homework() {
  
  let listyle = {
    margin: "10px",
    textAlign: "center"
  }
  
  return (
   <div>
      <div className="Homework">
        <h1 style={{color: "green"}}>Homework</h1>
        <h1>Please select your language group for homework.</h1>
      </div>
      
      <div>
        <div className="Reading">
          <Link to="/yifan-homework/homework/native"><button style={{textAlign:"center"}, {margin: "5vw"}}>母语班</button></Link>
          <Link to="/yifan-homework/homework/international"><button style={{textAlign:"center"}, {margin: "5vw"}}>International</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Homework;