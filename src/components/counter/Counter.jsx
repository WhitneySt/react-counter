import React, { useState } from "react";
import './counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

    const handleIncrement = () => setCounter(counter + 1);
    
    const handleDecrement = () => setCounter(counter - 1);

  return (
    <div>
      <button onClick={handleDecrement} className="button button--decrement">
        -
      </button>
      <span>{counter}</span>
      <button onClick={handleIncrement} className="button button--increment ">
        +
      </button>
    </div>
  );
};

export default Counter;
