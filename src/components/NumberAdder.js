import React, { useState } from 'react';

const NumberAdder = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number"/>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number"/><br/>
      <button onClick={handleAddition}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default NumberAdder;
