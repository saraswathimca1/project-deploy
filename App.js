
import React, { useState } from 'react';
import './App.css';
import Result from './result';

function App() {
  const [term, setTerm] = useState("");
  const [secretNum] = useState(Math.floor(Math.random() * 10) + 1);

  const handleChange = (e) => {
    setTerm(parseInt(e.target.value)); // Convert input value to integer
  }

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">Guess the number between 1 to 10</label>
      </div>
      <input id="term" type='text' name='term' onChange={handleChange}></input>
      <Result secretNum={secretNum} term={term} />
    </div>
  );
}

export default App;
