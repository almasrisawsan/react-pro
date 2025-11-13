// Build a counter component that uses useReducer instead of useState.
// Requirements
// The initial count should be 0.
// The component must have buttons to:
// Increment the count by 1.
// Decrement the count by 1.
// Reset the count to 0.

import React, { useReducer } from 'react';

// --- STEP 1: Define the Reducer Function ---
function counterReducer(state, action) {
  switch (action.type) {
    // Implement the cases here
    // HINT: The state is just a number.
    
    case 'INCREMENT':
        // ...
    
    case 'DECREMENT':
        // ...
        
    case 'RESET':
        // ...
        
    default:
        return state;
  }
}

// --- STEP 2: The Component ---
export function CounterExercise() {
  // Use useReducer here. The initial state is 0.
  const [count, dispatch] = /* ... */; 

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Exercise 1: Simple Counter</h3>
      <h1>Count: {count}</h1>
      
      <button onClick={() => /* Dispatch INCREMENT */}>
        + Increment
      </button>
      <button onClick={() => /* Dispatch DECREMENT */}>
        - Decrement
      </button>
      <button onClick={() => /* Dispatch RESET */}>
        Reset
      </button>
    </div>
  );
}