import React, { useState } from "react";

function Counter() {
  let [counterValue, counterUp] = useState(0);
  let buttonUp = () => counterUp(counterValue + 1);
  let buttonDown = () => {
    if (counterValue > 0) {
      counterUp(counterValue - 1);
    }
  };
  return (
    <div>
      <p>{counterValue}</p>
      <button onClick={buttonUp}> + </button>
      <button onClick={buttonDown}> - </button>
    </div>
  );
}

export default Counter;