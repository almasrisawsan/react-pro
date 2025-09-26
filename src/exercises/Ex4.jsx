//Clicking this button is supposed to switch the page background between white and black.
// However, nothing happens when you click it. Fix the problem.
// (Don’t worry about the logic inside handleClick—that part is fine.)

export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return <button onClick={handleClick()}>Toggle the lights</button>;
}
