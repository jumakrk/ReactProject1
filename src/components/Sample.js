import { useState } from "react";

const Sample = () => {
  const [number, setNumber] = useState(1);

  const addNumber =()=> {
    setNumber(number + 1)
  };

  const minusNumber =()=> {
    setNumber(number - 1)
  };

  return (
    <div>
      <h1>The value is {number}</h1>
      <button onClick={minusNumber}> - </button>
      <button onClick={addNumber}> + </button>
    </div>
  );
};

export default Sample;