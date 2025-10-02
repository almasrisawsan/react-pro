import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1); // 1
          setNumber((prev) => prev + 1); // 2
          setNumber((prev) => prev + 1); // 3
        }}
      >
        +3
      </button>
    </>
  );
}
