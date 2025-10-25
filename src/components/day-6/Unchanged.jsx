import { memo, useState } from "react";

export default function MyApp() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <>
      <label>
        Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{name && ", "}
      {name}!
    </h3>
  );
});

//import { memo, useState } from 'react';
// Even when a component is memoized, it will still re-render when its own state changes. Memoization only has to do with props that are passed to the component from its parent.

// export default function MyApp() {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   return (
//     <>
//       <label>
//         Name{': '}
//         <input value={name} onChange={e => setName(e.target.value)} />
//       </label>
//       <label>
//         Address{': '}
//         <input value={address} onChange={e => setAddress(e.target.value)} />
//       </label>
//       <Greeting name={name} />
//     </>
//   );
// }

// const Greeting = memo(function Greeting({ name }) {
//   console.log('Greeting was rendered at', new Date().toLocaleTimeString());
//   const [greeting, setGreeting] = useState('Hello');
//   return (
//     <>
//       <h3>{greeting}{name && ', '}{name}!</h3>
//       <GreetingSelector value={greeting} onChange={setGreeting} />
//     </>
//   );
// });

// function GreetingSelector({ value, onChange }) {
//   return (
//     <>
//       <label>
//         <input
//           type="radio"
//           checked={value === 'Hello'}
//           onChange={e => onChange('Hello')}
//         />
//         Regular greeting
//       </label>
//       <label>
//         <input
//           type="radio"
//           checked={value === 'Hello and welcome'}
//           onChange={e => onChange('Hello and welcome')}
//         />
//         Enthusiastic greeting
//       </label>
//     </>
//   );
// }
