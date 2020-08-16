import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


function Quiz() {

let listyle = {
  padding: "1vh"
}
  return (
    <div>
      <div className="Quiz">
        <h1 style={{color: "green"}}>Quiz 小测</h1>
          <h2 className="h2style">Quiz aim to test children on their mandarin understanding and see whether they are able to apply what they have learnt in an interesting way.</h2>
          <ul>
            <Link to="/yifan-homework/quiz/quiz1"><li style={listyle}>Quiz 1</li></Link>
            <Link to="/yifan-homework/quiz/quiz2"><li style={listyle}>Quiz 2</li></Link>
          </ul>
      </div>
    </div>
  );
}

{/*const quizHome = () => (
  <div className="Quiz">
    <h1 style={{color: "green"}}>Quiz 小测</h1>
      <h2 className="h2style">Quiz aim to test children on their mandarin understanding and see whether they are able to apply what they have learnt in an interesting way.</h2>
      <ul>
        <Link to="/yifan-homework/quiz/quiz1"><li>Quiz 1</li></Link>
      </ul>
</div>
    
  
);*/}

export default Quiz;