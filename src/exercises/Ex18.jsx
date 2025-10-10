//This Counter component displays a counter that should increment every second. 
// On mount, it calls setInterval. This causes onTick to run every second. 
// The onTick function increments the counter.
// However, instead of incrementing once per second, it increments twice. Why is that? 
// Find the cause of the bug and fix it.

//App.jsx
import { useState } from "react";
import Counter from "./Counter.js";

export default function Form() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} counter
      </button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}

//Counter.jsx
import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    setInterval(onTick, 1000);
  }, []);

  return <h1>{count}</h1>;
}
