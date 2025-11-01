// In this example, there is a delay state variable controlled by a slider, but its value is not used.
// Pass the delay value to your custom useCounter Hook, and change the useCounter Hook to use the passed delay instead of hardcoding 1000 ms.

import { useState } from "react";
import { useCounter } from "./useCounter.js";

export default function Counter() {
  const [delay, setDelay] = useState(1000);
  const count = useCounter();
  return (
    <>
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </label>
      <hr />
      <h1>Ticks: {count}</h1>
    </>
  );
}

// useCounter custom Hook implementation
// import { useState, useEffect } from "react";

// export function useCounter() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount((c) => c + 1);
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return count;
// }
