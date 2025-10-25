// skip rerendering of components:
function ProductPage({ productId, referrer, theme }) {
  // Tell React to cache your function between re-renders...
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  ); // ...so as long as these dependencies don't change...

  return (
    <div className={theme}>
      {/* ...ShippingForm will receive the same props and can skip re-rendering */}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

//another example:
import React from "react";

// ButtonComponent.jsx
// 1. Wrap the child component in React.memo()
const ButtonComponent = React.memo(({ onClick, label }) => {
  // This log will only appear when the component *actually* re-renders
  console.log(`[ButtonComponent] RENDERED: ${label}`);

  return (
    <button onClick={onClick} style={{ margin: "10px" }}>
      {label}
    </button>
  );
});

export default ButtonComponent;

// App.jsx
import React, { useState, useCallback } from 'react';
import ButtonComponent from './ButtonComponent'; // Assuming the child component is imported

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [extraState, setExtraState] = useState(0);

  // --- Scenario 1: NO useCallback (Reference changes on every render) ---
  const handleNoMemoIncrement = () => {
    setCount(count + 1);
  };

  // --- Scenario 2: WITH useCallback (Reference is stable) ---
  // The empty dependency array [] means this function will only be created once
  const handleMemoIncrement = useCallback(() => {
    // We use the functional update form (c => c + 1) to correctly update state
    // without including 'count' in the dependency array.
    setCount(c => c + 1);
  }, []);

  // --- Helper function to force Parent re-render (Extra State changes) ---
  const forceReRender = () => {
    setExtraState(extraState + 1);
  };

  console.log('[ParentComponent] RENDERED');

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Parent Component (Count: {count}) (Extra State: {extraState})</h2>
      
      {/* Button to change a state variable NOT used by the child function */}
      <button onClick={forceReRender} style={{ marginBottom: '20px' }}>
        Force Parent Re-render
      </button>

      <div style={{ display: 'flex', gap: '20px' }}>
        
        {/*
          A. NON-MEMOIZED:
             - Parent re-renders -> handleNoMemoIncrement reference changes.
             - ButtonComponent is wrapped in memo, but the onClick prop (a new function)
               forces it to re-render unnecessarily.
        */}
        <div style={{ border: '1px solid red', padding: '10px' }}>
          <h3>A. Non-Memoized Function</h3>
          <ButtonComponent
            label="Increment (No Memo)"
            onClick={handleNoMemoIncrement} // New function reference on every Parent render
          />
          <p>
            **Watch the console:** This button's child component re-renders every time the Parent re-renders.
          </p>
        </div>

        {/*
          B. MEMOIZED with useCallback:
             - Parent re-renders -> handleMemoIncrement reference STAYS THE SAME.
             - ButtonComponent is wrapped in memo, so it correctly skips re-rendering
               when the Parent's other state (extraState) changes.
        */}
        <div style={{ border: '1px solid green', padding: '10px' }}>
          <h3>B. Memoized Function</h3>
          <ButtonComponent
            label="Increment (With Memo)"
            onClick={handleMemoIncrement} // Same function reference until dependencies change
          />
          <p>
            **Watch the console:** This button's child component *only* re-renders when *its* logic changes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParentComponent;