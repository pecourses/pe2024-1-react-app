import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // let count = 0;

  function decrement() {
    // setCount(count - 1); // --count;
    setCount(prevCount => prevCount - 1);
  }

  function increment() {
    // setCount(count + 1);
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
