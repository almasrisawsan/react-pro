import React, { useState, useMemo, useCallback, memo } from "react";

// ==========================================================
// 1. DEMONSTRATION OF React.memo (Higher-Order Component)
// ==========================================================

/**
 * Optimized Component (Receives a primitive prop and a optimized function)
 * This component will only re-render if its props (message, onClick) change shallowly.
 *
 * @param {string} message - A string prop.
 * @param {function} onClick - A function prop (needs to be memoized with useCallback).
 */
const MemoizedButton = memo(({ slowResult }) => {
  console.log("    [MemoizedButton] RENDERED (Good! Should be minimal)");
  return (
    <>{slowResult}</>
    // <button
    //   onClick={onClick}
    //   className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
    // >
    //   {message}
    // </button>
  );
});

// Unoptimized Component (Always re-renders when parent renders)
const UnoptimizedCounter = ({ count }) => {
  console.log("    [UnoptimizedCounter] RENDERED (Bad! Renders unnecessarily)");
  return (
    <div className="p-4 border border-red-400 bg-red-50 text-red-800 rounded">
      Unoptimized Component Count: {count}
    </div>
  );
};

// ==========================================================
// 2. DEMONSTRATION OF useMemo (Memoizing a Value/Calculation)
// ==========================================================

/**
 * Simulates a computationally expensive task.
 * @param {number} num - The number to calculate (e.g., number of items).
 * @returns {number} - A large, slow-to-calculate number.
 */
const expensiveCalculation = (num) => {
  console.log("  [Expensive Calculation] RUNNING...");
  let total = 0;
  // Simulate heavy computation (e.g., millions of iterations)
  for (let i = 0; i < 200000000; i++) {
    total += num;
  }
  console.log("  [Expensive Calculation] FINISHED.");
  return total;
};

// ==========================================================
// 3. MAIN COMPONENT (Parent)
// ==========================================================

const OptimizationDemo = () => {
  const [list, setList] = useState([1, 2, 3]);
  const [uiCount, setUiCount] = useState(0);

  // --- 3A. useMemo Demonstration ---
  // Goal: Only recalculate the `slowResult` when the `list` state changes.
  // If `uiCount` changes, we don't want the expensive calculation to run again.

  const slowResult = useMemo(expensiveCalculation(list.length), [list]);

  // --- 3B. useCallback Demonstration ---
  // Goal: Provide a stable function reference to the MemoizedButton.
  // The MemoizedButton relies on this reference being stable to prevent unnecessary re-renders.

  // 1. Unstable Function (Will cause MemoizedButton to re-render)
  const unstableHandler = () => {
    console.log("    [Handler] Unstable handler called.");
    // In a real app, this function often triggers some state update or API call.
  };

  // 2. Stable Function (The reference only changes if `list` changes)
  const stableHandler = useCallback(() => {
    console.log(
      `    [Handler] Stable handler called. List size: ${list.length}`
    );
    setList((prev) => [...prev, prev.length + 1]);
  }, [list]); // Dependency array ensures the handler "sees" the latest list state

  // --- Utility Functions ---
  const handleUiUpdate = () => {
    setUiCount((prev) => prev + 1);
  };

  const handleClearList = () => {
    setList([]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8 bg-gray-50 border border-gray-200 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-blue-700 border-b pb-2">
        React Optimization Demo
      </h1>
      <p className="text-gray-600">
        Watch the browser Console log for "RENDERED" and "RUNNING" messages.
      </p>

      {/* Control Panel: Changing this state *should not* trigger expensive calculations. */}
      <div className="p-4 border rounded bg-yellow-100 space-y-3">
        <h2 className="text-xl font-semibold">
          UI State Control (Trigger Parent Re-render)
        </h2>
        <p>
          Current UI Count: <span className="font-mono text-lg">{uiCount}</span>
        </p>
        <button
          onClick={handleUiUpdate}
          className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
        >
          Update UI State (Fast)
        </button>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* useMemo Section */}
      {/* ------------------------------------------------------------------ */}
      <div className="p-4 border rounded bg-blue-100 space-y-3">
        <h2 className="text-xl font-semibold">
          useMemo: Memoizing the Calculation
        </h2>
        <p>
          List Length (Memo Dependency):{" "}
          <span className="font-mono text-lg">{list.length}</span>
        </p>
        <p>
          Expensive Result:{" "}
          <span className="font-mono text-xl text-blue-800">{slowResult}</span>
        </p>

        <button
          onClick={handleClearList}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors mr-2"
        >
          Clear List (Trigger useMemo)
        </button>
        <p className="text-sm text-gray-500">
          Clicking "Update UI State" above will NOT rerun the expensive
          calculation, thanks to <code>useMemo</code>.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* memo & useCallback Section */}
      {/* ------------------------------------------------------------------ */}
      <div className="p-4 border rounded bg-gray-100 space-y-3">
        <h2 className="text-xl font-semibold">
          memo & useCallback: Memoizing Components & Functions
        </h2>

        <div className="flex space-x-4">
          {/* Component 1: Optimized */}
          <div className="w-1/2 p-3 border border-green-300 rounded">
            <h3 className="text-lg font-medium text-green-700">
              Optimized Component
            </h3>
            <p>
              Uses <code>React.memo</code> and receives <code>useCallback</code>{" "}
              function.
            </p>
            <MemoizedButton
              slowResult={slowResult}
              //onClick={stableHandler} // Stable reference
            />
          </div>

          {/* Component 2: Unoptimized */}
          {/* <div className="w-1/2 p-3 border border-orange-300 rounded">
            <h3 className="text-lg font-medium text-orange-700">
              Unoptimized Component
            </h3>
            <p>
              Uses <code>React.memo</code> but receives an inline function
              (UNSTABLE).
            </p>
            <MemoizedButton
              message="Does Not Optimize"
              onClick={() => unstableHandler()} // Inline function recreates on every render
            />
          </div> */}
        </div>

        {/* Component 3: Component without memo */}
        {/* <div className="mt-4">
          <UnoptimizedCounter count={uiCount} />
          <p className="text-sm text-gray-500">
            This component renders on every parent state change, regardless of
            optimization hooks.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default OptimizationDemo;
