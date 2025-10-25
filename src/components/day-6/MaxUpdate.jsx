import React, { useState, useEffect } from "react";

const InfiniteLoopExample = () => {
  const [count, setCount] = useState(0);
  const [loopCount, setLoopCount] = useState(0);

  // A simple counter to track how many times the component has rendered
  // useEffect(() => {
  //   setLoopCount((prev) => prev + 1);
  // }, [loopCount]);

  // 🔴 DANGER: This useEffect will cause an infinite loop!
  useEffect(() => {
    // 1. Log the current count just before the state update
    console.log(`❌ Effect Running (Loop ${loopCount}): Count is ${count}.`);

    // 2. Set the state 'count'. This is the trigger.
    // We are setting it based on a condition to make the problem explicit,
    // but simply calling setCount() is enough to trigger the loop.
    if (count < 3) {
      // 3. This call to setCount updates the 'count' state.
      // Changing the state causes the component to re-render.
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        console.warn(
          `  >>> State setter called. New count will be: ${newCount}`
        );
        return newCount;
      });
    } else {
      console.error(`  >>> Reached limit. Stopping state updates.`);
      // Even if setCount isn't called, the component re-renders due to the
      // dependency change, leading to a constant check.
    }
  }, [count]); // 4. 🔴 The Bug: 'count' is a dependency, and it's changed inside the effect!

  // The component re-renders every time 'count' changes, and also when 'loopCount' changes.
  // The 'count' changes will trigger the useEffect, causing the infinite loop until React stops it.

  return (
    <div style={{ padding: "20px", border: "2px solid red", margin: "20px" }}>
      <h2>❌ Infinite Loop Scenario (Stop after 100 renders)</h2>
      <p>
        This code will immediately cause a "Maximum update depth exceeded"
        warning in the console, indicating an infinite render loop.
      </p>

      <p>
        <strong>Render Count:</strong> {loopCount}
      </p>
      <p>
        <strong>'count' State:</strong> {count}
      </p>

      {loopCount > 100 && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          React has likely stopped the rendering to prevent a crash. Check your
          browser console!
        </p>
      )}
    </div>
  );
};

export default InfiniteLoopExample;
