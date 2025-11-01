import React, { useState, useEffect } from "react";

// --- Simulated Async Functions (like API calls) ---
const fetchDataStep1 = (data) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1: Initial data received.");
      resolve(data + " -> Step 1 Complete");
    }, 1000);
  });

const fetchDataStep2 = (dataFromStep1) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2: Processing data from Step 1.");
      resolve(dataFromStep1 + " -> Step 2 Complete");
    }, 1500);
  });

const fetchDataStep3 = (dataFromStep2) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3: Final data processing.");
      resolve(dataFromStep2 + " -> Step 3 Complete");
    }, 500);
  });
// ----------------------------------------------------

const CallbackHellExample = () => {
  const [data, setData] = useState("Initial State");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start of the asynchronous chain
    setIsLoading(true);

    const executeNestedCalls = async () => {
      const data1 = await fetchDataStep1("Start Data");
      const data2 = await fetchDataStep2(data1);
      const data3 = await fetchDataStep3(data2);
      setData(data3);
      setIsLoading(false);
    };

    executeNestedCalls();
  }, []); // Run only on mount

  return (
    <div>
      <h2>1. Callback Hell Example (Pyramid of Doom)</h2>
      {isLoading ? (
        <p>Loading sequence data...</p>
      ) : (
        <p>
          <strong>Final Data:</strong> {data}
        </p>
      )}
      <p>
        <em>Check the browser console to see the sequence of logs.</em>
      </p>
    </div>
  );
};

export default CallbackHellExample;
