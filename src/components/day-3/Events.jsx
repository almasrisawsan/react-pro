// passing props to event handlers
function AlertButton({ message, children }) {
  const displayMessage = (msg, ev) => {
    console.log(ev);
    return alert(msg);
  };
  return (
    <button onClick={(ev) => displayMessage(message, ev)}>{children}</button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Alert button one clicked">Button 1</AlertButton>
      <AlertButton message="Alert button two clicked">Button 2</AlertButton>
      {/* <AlertButton message="Uploading!">Upload Image</AlertButton> */}
    </div>
  );
}
