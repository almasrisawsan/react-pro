import { useState } from "react";

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");

  let counter = 0;
  // if (isSent) {
  //   return <h1>Your message is on its way!</h1>;
  // }

  const saveMessage = (e) => {
    setMessage(e.target.value);
    counter += 1;
  };
  console.log("Rendering...", counter);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
          //sendMessage(message);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={saveMessage}
        />
        <button type="submit">Send</button>
      </form>
      {isSent && <h1>Your message is on its way!</h1>}
    </>
  );
}

// function sendMessage(message) {
//   // ...
// }
