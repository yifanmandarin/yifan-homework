import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Quiz from './Quiz';
import {Quiz1, Quiz2} from './Quiz1';
import Homework from './Homework';
import {Int_hw_month, Nat_hw_month} from './Homework';
import Reading from './Reading';
import {six_to_seven_Hw1, six_to_seven_Hw2, six_to_seven_Hw3, eight_to_nine_Hw1} from './Nat-hw-sep';
import Int_read from './Int-read';
import {iReading1, iReading2} from './IntReading0';
import Nat_read from './Native-read';
import {nReading1, nReading2} from './NatReading0';
import {nat_hw_sep, six_to_seven, eight_to_nine} from './Nat-hw-sep';
import {int_hw_sep, int_six_to_seven, int_eight_to_nine, int_six_to_seven_Hw1, int_eight_to_nine_Hw1} from './Int-hw-sep'


function App() {
  return (
    <div className="App">
      <img src={yifanlogo} alt="yifan logo" />
      <Router>
      <Nav />
        <Switch>
          <Route path="/yifan-homework/quiz" exact component={Quiz} />
            <Route path="/yifan-homework/quiz/quiz1" component={Quiz1} />
            <Route path="/yifan-homework/quiz/quiz2" component={Quiz2} />
          <Route path="/yifan-homework/reading" exact component={Reading} />
            <Route path="/yifan-homework/reading/international" exact component={Int_read} />
              <Route path="/yifan-homework/reading/international/reading1" component={iReading1} />
              <Route path="/yifan-homework/reading/international/reading2" component={iReading2} />
            <Route path="/yifan-homework/reading/native" exact component={Nat_read} />
              <Route path="/yifan-homework/reading/native/reading1" exact component={nReading1} />
                {/*<Route path="/yifan-homework/reading/native/reading1/q1" component={natReadQ1} />*/}
              <Route path="/yifan-homework/reading/native/reading2" component={nReading2} />
          <Route path="/yifan-homework/homework" exact component={Homework} />
            <Route path="/yifan-homework/homework/native" exact component={Nat_hw_month} />
              <Route path="/yifan-homework/homework/native/sep20" exact component={nat_hw_sep} />
                <Route path="/yifan-homework/homework/native/sep20/6to7" exact component={six_to_seven} />
                <Route path="/yifan-homework/homework/native/sep20/8to9" exact component={eight_to_nine} />
                  <Route path="/yifan-homework/homework/native/sep20/6to7/hw1" component={six_to_seven_Hw1} />
                  <Route path="/yifan-homework/homework/native/sep20/6to7/hw2" component={six_to_seven_Hw2} />
                  <Route path="/yifan-homework/homework/native/sep20/6to7/hw3" component={six_to_seven_Hw3} />
                  <Route path="/yifan-homework/homework/native/sep20/8to9/hw1" component={eight_to_nine_Hw1} />
            <Route path="/yifan-homework/homework/international" exact component={Int_hw_month} />
              <Route path="/yifan-homework/homework/international/sep20" exact component={int_hw_sep} />
                  <Route path="/yifan-homework/homework/international/sep20/6to7" exact component={int_six_to_seven} />
                  <Route path="/yifan-homework/homework/international/sep20/8to9" exact component={int_eight_to_nine} />
                    <Route path="/yifan-homework/homework/international/sep20/6to7/hw1" component={int_six_to_seven_Hw1} />
                    <Route path="/yifan-homework/homework/international/sep20/8to9/hw1" component={int_eight_to_nine_Hw1} />
              
          <Route path="/yifan-homework" exact component={Home}/>
          {/*<Route render={() => <Redirect to={{pathname: "/yifan-homework"}} />} />*/}
        </Switch>
      </Router>
    </div>
  );
}

const listStyle = {
  fontSize: "x-large"
}

const Home = () => (
   
    <div>
      <header className="page-header">
        <h1 style={{color: "orange", fontFamily: "arial", fontSize: "7vh"}}>Welcome to Yifan Homework!</h1>
          <h2>Yifan Homework is a platform where children can learn mandarin at home too! We will provide them with after-class homework, audio recordings, practises as well as quizzes!</h2>
          {/*<h2>It can be categorized into 3 big types: </h2>*/}
            <ul className="nostylelist">
              <Link to="/yifan-homework/homework">
                <li style={listStyle}><strong>Homework / Audio Recording (课堂录音)</strong></li>
              </Link> 
              <Link to="/yifan-homework/reading"> 
                <li style={listStyle}><strong>One Reading Per Week (每周一篇)</strong></li>
              </Link>
              <Link to="/yifan-homework/quiz">
                <li style={listStyle}><strong>Quizzes and Games (小测和游戏)</strong></li>
              </Link>
            </ul>
      </header>
    </div>
  );

export default App;