import React from "react";

function Result({ secretNum, term }) {
  let result;
  if (term) {
    if (term > secretNum) {
      result = 'Higher';
    } else if (term < secretNum) {
      result = "Lower";
    } else if (term === secretNum) {
      result = "Wow! Correct";
    } else {
      result = "Enter valid input";
    }
  }
  return (
    <h3>You guessed: {result}</h3>
  );
}

export default Result;
