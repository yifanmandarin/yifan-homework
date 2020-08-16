import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import { Link } from 'react-router-dom';

function Reading() {
  return (
    <div>
        <div className="Reading">
        <h1 style={{color: "green"}}>One Reading Per Week 每周一篇</h1>
            <h2>This session serves as an extra reading per week.</h2>
            <h2>Children need to answer question to test their understanding after each reading.</h2>
        </div>

        <div className="Reading">
            <Link to="/yifan-homework/reading/native"><button style={{textAlign:"center"}, {margin: "5vw"}}>母语班</button></Link>
            <Link to="/yifan-homework/reading/international"><button style={{textAlign:"center"}, {margin: "5vw"}}>International</button></Link>
        </div>
    </div>
  );
}

export default Reading;