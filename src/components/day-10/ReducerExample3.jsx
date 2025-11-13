import React, { useReducer, useState } from "react";

// Mock API function (simulates a server delay)
const mockFetch = (shouldSucceed = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ title: "User Data Fetched", id: 42, profile: "Admin" });
      } else {
        reject("Failed to connect to API.");
      }
    }, 1500);
  });
};

const initialFetchState = {
  data: null,
  loading: false,
  error: null,
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        data: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export function DataFetcherMultipleState() {
  // State variables for the three components of the fetch state
  const [state, dispatch] = useReducer(fetchReducer, initialFetchState);

  // Function to handle the asynchronous operation and update the state
  const startFetch = (succeed) => {
    // --- Step 1: Start of Fetch (Setting the 'Loading' State) ---
    dispatch({ type: "FETCH_START" });

    mockFetch(succeed)
      .then((result) => {
        // --- Step 2: Fetch Success State ---
        dispatch({ type: "FETCH_SUCCESS", payload: { data: result } });
      })
      .catch((err) => {
        // --- Step 3: Fetch Error State ---
        dispatch({ type: "FETCH_ERROR", payload: { error: err.toString() } });
      });
  };

  const { loading, error, data } = state;
  return (
    <div style={{ padding: "20px", border: "1px solid blue" }}>
      <h3>Data Fetcher State Machine - useState Version</h3>

      {/* Control Buttons */}
      <button onClick={() => startFetch(true)} disabled={loading}>
        Fetch Data (Success)
      </button>
      <button
        onClick={() => startFetch(false)}
        disabled={loading}
        style={{ marginLeft: "10px" }}
      >
        Fetch Data (Error)
      </button>

      {/* Rendering based on state */}
      <div style={{ marginTop: "20px" }}>
        {loading && <h4>Loading... Please wait.</h4>}

        {error && <h4 style={{ color: "red" }}>Error: {error}</h4>}

        {data && (
          <div>
            <h4>Data Loaded Successfully:</h4>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

// const initialFetchState = {
//   data: null,
//   loading: false,
//   error: null,
// };

// function fetchReducer(state, action) {
//   switch (action.type) {
//     case "FETCH_START":
//       // Start loading, clear previous error/data
//       return {
//         loading: true,
//         data: null,
//         error: null,
//       };

//     case "FETCH_SUCCESS":
//       // Loading complete, save data
//       return {
//         loading: false,
//         data: action.payload.data,
//         error: null,
//       };

//     case "FETCH_ERROR":
//       // Loading complete, save error message
//       return {
//         loading: false,
//         data: null,
//         error: action.payload.error,
//       };

//     default:
//       return state;
//   }
// }
// //////////////////////////////////////////////////////////////////
// import React, { useReducer, useEffect } from "react";

// // (Include the initialFetchState and fetchReducer definitions from above)

// // Mock API function (simulates a server delay)
// const mockFetch = (shouldSucceed = true) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldSucceed) {
//         resolve({ title: "User Data Fetched", id: 42, profile: "Admin" });
//       } else {
//         reject("Failed to connect to API.");
//       }
//     }, 1500);
//   });
// };

// export function DataFetcher() {
//   const [state, dispatch] = useReducer(fetchReducer, initialFetchState);

//   // Function to run the fetch operation
//   const startFetch = (succeed) => {
//     // 1. Dispatch START action
//     dispatch({ type: "FETCH_START" });

//     mockFetch(succeed)
//       .then((result) => {
//         // 2. Dispatch SUCCESS action with data payload
//         dispatch({ type: "FETCH_SUCCESS", payload: { data: result } });
//       })
//       .catch((err) => {
//         // 3. Dispatch ERROR action with error payload
//         dispatch({ type: "FETCH_ERROR", payload: { error: err.toString() } });
//       });
//   };

//   return (
//     <div style={{ padding: "20px", border: "1px solid blue" }}>
//       <h3>Data Fetcher State Machine</h3>

//       {/* Control Buttons */}
//       <button onClick={() => startFetch(true)} disabled={state.loading}>
//         Fetch Data (Success)
//       </button>
//       <button
//         onClick={() => startFetch(false)}
//         disabled={state.loading}
//         style={{ marginLeft: "10px" }}
//       >
//         Fetch Data (Error)
//       </button>

//       {/* Rendering based on state */}
//       <div style={{ marginTop: "20px" }}>
//         {state.loading && <h4>Loading... Please wait.</h4>}

//         {state.error && <h4 style={{ color: "red" }}>Error: {state.error}</h4>}

//         {state.data && (
//           <div>
//             <h4>Data Loaded Successfully:</h4>
//             <pre>{JSON.stringify(state.data, null, 2)}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
