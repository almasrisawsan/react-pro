// ref example
import { useRef, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function handleClickCounter2() {
    setCounter(counter + 1);
  }
  return (
    <>
      <button onClick={handleClickCounter2}>
        UseSate: You clicked {counter} times
      </button>
      {(counter === 0 || counter > 3) && <CounterComponent />}
    </>
  );
};

export function CounterComponent() {
  let countRef = useRef(0);

  function handleClick() {
    countRef.current = countRef.current + 1;
    console.log("Inside handleClick function", countRef.current);
  }

  console.log("From CounterComponent outside handleClick", countRef.current);

  return (
    <button onClick={handleClick}>
      UseRef: You clicked {countRef.current} times
    </button>
  );
}

export default Counter;
