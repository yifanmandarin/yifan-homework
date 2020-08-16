import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import { Link } from 'react-router-dom';


function Homework() {
  
  let listyle = {
    margin: "10px",
    textAlign: "center"
  }
  
  return (
   <div>
      <div className="Homework">
        <h1 style={{color: "green"}}>Homework</h1>
          <h2>This session is for after class lesson.</h2>
      </div>
      
      <div>
        <ul>
          <Link to="/yifan-homework/homework/hw1"><li style={listyle}>Homework 1</li></Link>
          <Link to="/yifan-homework/homework/hw2"><li style={listyle}>Homework 2</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Homework;