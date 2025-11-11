// Currently, the event handlers in ContactList.js and Chat.js have // TODO comments.
// This is why typing into the input doesn’t work, and clicking on the buttons doesn’t change the selected recipient.
// Replace these two // TODOs with the code to dispatch the corresponding actions.
// To see the expected shape and the type of the actions, check the reducer in messengerReducer.js.
// The reducer is already written so you won’t need to change it. You only need to dispatch the actions in ContactList.js and Chat.js.

//App.jsx
import { useReducer } from "react";
import Chat from "./Chat.js";
import ContactList from "./ContactList.js";
import { initialState, messengerReducer } from "./messengerReducer";

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

// messengerReducer.js
// export const initialState = {
//   selectedId: 0,
//   message: "Hello",
// };

// export function messengerReducer(state, action) {
//   switch (action.type) {
//     case "changed_selection": {
//       return {
//         ...state,
//         selectedId: action.contactId,
//         message: "",
//       };
//     }
//     case "edited_message": {
//       return {
//         ...state,
//         message: action.message,
//       };
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// ContactList.jsx
// export default function ContactList({contacts, selectedId, dispatch}) {
//   return (
//     <section className="contact-list">
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>
//             <button
//               onClick={() => {
//                 // TODO: dispatch changed_selection
//               }}>
//               {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// Chat.jsx
// import { useState } from 'react';

// export default function Chat({contact, message, dispatch}) {
//   return (
//     <section className="chat">
//       <textarea
//         value={message}
//         placeholder={'Chat to ' + contact.name}
//         onChange={(e) => {
//           // TODO: dispatch edited_message
//           // (Read the input value from e.target.value)
//         }}
//       />
//       <br />
//       <button>Send to {contact.email}</button>
//     </section>
//   );
// }
