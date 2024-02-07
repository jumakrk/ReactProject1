import React, { useState } from 'react';

const ScoreGrader = () => {
  const [score, setScore] = useState('');
  const [grade, setGrade] = useState('');

  const handleScoreChange = (e) => {
    setScore((e.target.value));
  };

  const displayGrade = () => {
    if (score < 0) {
      setGrade('Invalid Score');
    } else if (score >= 0 && score <= 39) {
      setGrade('Fail');
    } else if (score >= 40 && score <= 49) {
      setGrade('D');
    } else if (score >= 50 && score <= 59) {
      setGrade('C');
    } else if (score >= 60 && score <= 69) {
      setGrade('B');
    } else if (score >= 70 && score <= 100) {
      setGrade('A');
    } else { 
      alert ('Please enter a valid number for the score!')
    }
  };

  return (
    <div>
      <label>Enter your score</label><br/>
      <input type="number" value={score} onChange={handleScoreChange} /><br/>
      <button onClick={displayGrade}>Calculate Grade</button>
      <p>Your Grade: {grade}</p>
    </div>
  );
};

export default ScoreGrader;
