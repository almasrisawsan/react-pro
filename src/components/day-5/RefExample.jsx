// state example
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>You clicked {count} times</button>;
}

// ref example
// import { useRef } from 'react';

// export default function Counter() {
//   let countRef = useRef(0);

//   function handleClick() {
//     // This doesn't re-render the component!
//     countRef.current = countRef.current + 1;
//   }

//   return (
//     <button onClick={handleClick}>
//       You clicked {countRef.current} times
//     </button>
//   );
// }
