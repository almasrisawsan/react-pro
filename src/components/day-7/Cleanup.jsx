// App.jsx
import { useEffect, useState } from "react";
import { createConnection } from "./chat.js";

export default function ChatRoom() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    return () => connection.disconnect(); // in queue for cleanup
  }, [value]);

  return (
    <>
      <h1>Welcome to the chat! {value}</h1>
      <button onClick={() => setValue((v) => v + 1)}>Increment</button>
    </>
  );
}

// With cleanup
// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// export default function ChatRoom() {
//   useEffect(() => {
//     const connection = createConnection();
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the chat!</h1>;
// }
