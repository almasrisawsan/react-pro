//This ColorSwitch component renders a button.
// It’s supposed to change the page color.
// Wire it up to the onChangeColor event handler prop it receives from the parent so that clicking the button changes the color.
// After you do this, notice that clicking the button also increments the page click counter.
// Your colleague who wrote the parent component insists that onChangeColor does not increment any counters.
// What else might be happening? Fix it so that clicking the button only changes the color, and does not increment the counter.

// Add this code to App.jsx
// import { useState } from "react";
// import ColorSwitch from "./ColorSwitch.js";

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   function handleClickOutside() {
//     setClicks((c) => c + 1);
//   }

//   function getRandomLightColor() {
//     let r = 150 + Math.round(100 * Math.random());
//     let g = 150 + Math.round(100 * Math.random());
//     let b = 150 + Math.round(100 * Math.random());
//     return `rgb(${r}, ${g}, ${b})`;
//   }

//   function handleChangeColor() {
//     let bodyStyle = document.body.style;
//     bodyStyle.backgroundColor = getRandomLightColor();
//   }

//   return (
//     <div style={{ width: "100%", height: "100%" }} onClick={handleClickOutside}>
//       <ColorSwitch onChangeColor={handleChangeColor} />
//       <br />
//       <br />
//       <h2>Clicks on the page: {clicks}</h2>
//     </div>
//   );
// }

export default function ColorSwitch({ onChangeColor }) {
  return <button>Change color</button>;
}
