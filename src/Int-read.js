import React from 'react';
import yifanlogo from './img/yifan-logo.png';
import './App.css';
import { Link } from 'react-router-dom';


function Int_read() {
    
    const listyle = {
        padding: "5px",
        fontSize: "3vh"
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
              <Link to="/yifan-homework/reading/international/reading1"><li style={listyle}>2020.9.2.</li></Link>
              <Link to="/yifan-homework/reading/international/reading2"><li style={listyle}>2020.9.9.</li></Link>
              <Link to="/yifan-homework/reading/international/reading3"><li style={listyle}>2020.9.16.</li></Link>
              <Link to="/yifan-homework/reading/international/reading4"><li style={listyle}>2020.9.23.</li></Link>
              <Link to="/yifan-homework/reading/international/reading5"><li style={listyle}>2020.9.30.</li></Link>
          </ul>
        </div>
      </body>
    </div>
  );
}

export default Int_read;