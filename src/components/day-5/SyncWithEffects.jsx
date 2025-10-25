import { useState, useRef, useEffect } from "react";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    console.log("After mount");
    if (isPlaying) {
      ref.current.play(); // Calling these while rendering isn't allowed.
    } else {
      ref.current.pause(); // Also, this crashes.
    }
  }, []);

  console.log(isPlaying + "-----First mount");

  return <video ref={ref} src={src} loop playsInline />;
}

export default function VideoPlayerApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={() => setCount(count + 1)}>click button</button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

// import { useState, useRef, useEffect } from "react";

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   });

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? "Pause" : "Play"}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }

// Specifying dependencies
// import { useState, useRef, useEffect } from 'react';

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       console.log('Calling video.play()');
//       ref.current.play();
//     } else {
//       console.log('Calling video.pause()');
//       ref.current.pause();
//     }
//   }, [isPlaying]);

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [text, setText] = useState('');
//   return (
//     <>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }
