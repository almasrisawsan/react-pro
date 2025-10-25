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

    fetchDataStep1("Start Data")
      .then((data1) => {
        // --- Start of Callback Hell Indentation ---
        console.log("Callback 1 executed.");
        fetchDataStep2(data1)
          .then((data2) => {
            console.log("Callback 2 executed.");
            fetchDataStep3(data2)
              .then((data3) => {
                console.log("Callback 3 executed. Chain complete.");
                // Final action: update state
                setData(data3);
                setIsLoading(false);
              })
              .catch((err) => {
                console.error("Error in Step 3:", err);
                setIsLoading(false);
              });
          })
          .catch((err) => {
            console.error("Error in Step 2:", err);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.error("Error in Step 1:", err);
        setIsLoading(false);
      });
    // --- End of Callback Hell Indentation ---
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
