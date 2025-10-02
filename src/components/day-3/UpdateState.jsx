// import { useState } from "react";

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button
//         onClick={() => {
//           setNumber(number + 3);
//         }}
//       >
//         +3
//       </button>
//     </>
//   );
//}

// import { useState } from "react";

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button
//         onClick={() => {
//           setNumber(number + 5);
//           alert(number);
//         }}
//       >
//         +5
//       </button>
//     </>
//   );
// }

// import { useState } from "react";

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button
//         onClick={() => {
//           setNumber(number + 5);
//           setTimeout(() => {
//             alert(number);
//           }, 3000);
//         }}
//       >
//         +5
//       </button>
//     </>
//   );
// }

// React keeps state fixed between re-renders
import { useState } from "react";

export default function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{" "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
