function Button({ onButtonClick, children }) {
  return <button onClick={onButtonClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  // function handlePlayClick() {
  //   alert(`Playing ${movieName}!`);
  // }

  const alertMovieName = () => alert(`Movie ${movieName} is being played`);

  return <Button onButtonClick={alertMovieName}>Play "{movieName}"</Button>;
}

// function UploadButton() {
//   return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
// }

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      {/* <UploadButton /> */}
    </div>
  );
}
