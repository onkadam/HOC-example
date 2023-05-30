import React, { useState } from "react";

function ClickIncrease() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase on click
      </button>
      <h1>Count:{count}</h1>
    </>
  );
}
export default ClickIncrease;
