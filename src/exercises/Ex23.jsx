// This component uses a state variable and an Effect to display a number that increments every second. Extract this logic into a custom Hook called useCounter. Your goal is to make the Counter component implementation look exactly like this:

// export default function Counter() {
//   const count = useCounter();
//   return <h1>Seconds passed: {count}</h1>;
// }
// You’ll need to write your custom Hook in useCounter.js and import it into the App.js file.

import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <h1>Seconds passed: {count}</h1>;
}
