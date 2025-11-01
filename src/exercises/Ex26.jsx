// In this example, there are two separate intervals.
// The App component calls useCounter, which calls useInterval to update the counter every second.
// But the App component also calls useInterval to randomly update the page background color every two seconds.
// For some reason, the callback that updates the page background never runs. Add some logs inside useInterval:

//  useEffect(() => {
//     console.log('✅ Setting up an interval with delay ', delay)
//     const id = setInterval(onTick, delay);
//     return () => {
//       console.log('❌ Clearing an interval with delay ', delay)
//       clearInterval(id);
//     };
//   }, [onTick, delay]);
// Do the logs match what you expect to happen? If some of your Effects seem to re-synchronize unnecessarily,
// can you guess which dependency is causing that to happen? Is there some way to remove that dependency from your Effect?
// After you fix the issue, you should expect the page background to update every two seconds.

// App.jsx
import { useCounter } from "./useCounter.js";
import { useInterval } from "./useInterval.js";

export default function Counter() {
  const count = useCounter(1000);

  useInterval(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
    document.body.style.backgroundColor = randomColor;
  }, 2000);

  return <h1>Seconds passed: {count}</h1>;
}

// useCounter.js
import { useState } from "react";
import { useInterval } from "./useInterval.js";

export function useCounter(delay) {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount((c) => c + 1);
  }, delay);
  return count;
}

// useInterval.js
import { useEffect } from "react";
import { useEffectEvent } from "react";

export function useInterval(onTick, delay) {
  useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => {
      clearInterval(id);
    };
  }, [onTick, delay]);
}
