import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import {Link} from 'react-router-dom';
import pdf1 from './img/int-hw/int-6to7-hw1.pdf';
import pdf2 from './img/int-hw/int-8to9-hw1.pdf';

const listyle = {
    padding: "5px",
    fontSize: "3vh"
}

export function int_hw_sep() {
    
    return (
        <div>
            <div className="Homework">
                <h1>Homework for September</h1>
                <h2>Please select your corresponding age group.</h2>
            </div>
            <div>
            <ul>
                <Link to="/yifan-homework/homework/international/sep20/6to7"><li style={listyle}>6-7 years old</li></Link>
                <Link to="/yifan-homework/homework/international/sep20/8to9"><li style={listyle}>8-9 years old</li></Link>
            </ul>
            </div>
        </div>
      );
}

export function int_six_to_seven(){
    return (
        <div>
            <div className="Homework">
                <h1>Homework for September (6 to 7 years old)</h1>
                <h2>Please select the Homework below.</h2>
            </div>
            <div>
            <ul>
                <Link to="/yifan-homework/homework/international/sep20/6to7/hw1"><li style={listyle}>2020.9.2</li></Link>
                <Link to="/yifan-homework/homework/international/sep20/6to7/hw2"><li style={listyle}>2020.9.3</li></Link>
                <Link to="/yifan-homework/homework/international/sep20/6to7/hw3"><li style={listyle}>2020.9.4</li></Link>
            </ul>
            </div>
        </div>
      );
}
    
    


export function int_eight_to_nine() {
    
    return (
        <div>
            <div className="Homework">
                <h1>Homework for September (8 to 9 years old)</h1>
                <h2>Please select the Homework below.</h2>
            </div>
            <div>
            <ul>
                <Link to="/yifan-homework/homework/international/sep20/8to9/hw1"><li style={listyle}>2020.9.2</li></Link>
                <Link to="/yifan-homework/homework/international/sep20/8to9/hw2"><li style={listyle}>2020.9.3</li></Link>
            </ul>
            </div>
        </div>
      );
}

export function int_six_to_seven_Hw1() {
    return (
      <div>
        <div className="Homework">
          <h1>Homework 1</h1>
            <h2>Please read the content / listen to the audio below.</h2>
        </div>
        
        <body>
          <div>
            <iframe src={pdf1} width="80%" height="800px"></iframe>
          </div>
        </body>
      </div>
    );
}

export function int_eight_to_nine_Hw1() {
    return (
      <div>
        <div className="Homework">
          <h1>Homework 1</h1>
            <h2>Please read the content / listen to the audio below.</h2>
        </div>
        
        <body>
          <div>
            <iframe src={pdf2} width="80%" height="800px"></iframe>
          </div>
        </body>
      </div>
    );
}
