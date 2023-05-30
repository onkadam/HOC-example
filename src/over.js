import React, { useState } from "react";

function OverMouseIncrease() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onMouseOver={() => setCount((count) => count + 1)}>
        Increase on MouseOver
      </button>
      <h1>Count:{count}</h1>
    </>
  );
}
export default OverMouseIncrease;
