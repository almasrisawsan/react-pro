/// without useReducer
import React, { useReducer, useState } from "react";

// --- Initial State Definition (Scattered Across useState calls) ---
const initialSettings = {
  theme: "light",
  fontSize: 16,
  notifications: {
    email: true,
    sms: false,
    push: true,
  },
  isEditing: false,
};

function settingsReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case "SET_FONT_SIZE":
      // Payload: { size: number }
      return {
        ...state,
        fontSize: action.payload.size,
      };

    case "TOGGLE_NOTIFICATION":
      // Payload: { type: 'email' | 'sms' | 'push' }
      return {
        ...state,
        notifications: {
          ...state.notifications, // Crucial for immutability!
          [action.payload.type]: !state.notifications[action.payload.type],
        },
      };

    case "TOGGLE_EDITING":
      return {
        ...state,
        isEditing: !state.isEditing,
      };

    default:
      return state;
  }
}

export function SettingsPanelMultipleState() {
  // State variables for each independent or nested piece of data
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings);

  // --- Handler Functions (Logic lives inside the component) ---

  const handleToggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const handleSetFontSize = (e) => {
    dispatch({
      type: "SET_FONT_SIZE",
      payload: { size: parseInt(e.target.value) },
    });
  };

  const handleToggleEditing = () => {
    dispatch({ type: "TOGGLE_EDITING" });
  };

  const handleToggleNotification = (notificationType) => {
    dispatch({
      type: "TOGGLE_NOTIFICATION",
      payload: { type: notificationType },
    });
  };

  // --- Rendering ---
  const { theme, fontSize, notifications, isEditing } = settings;

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "dark" ? "#333" : "#f0f0f0",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h2>User Settings ({theme.toUpperCase()} Mode) - useState Version</h2>

      {/* 1. Simple Boolean Toggle */}
      <button onClick={handleToggleEditing}>
        {isEditing ? "Done Editing" : "Edit Settings"}
      </button>

      {isEditing && (
        <fieldset style={{ marginTop: "15px" }}>
          <legend>Appearance</legend>

          {/* Theme Toggle */}
          <button onClick={handleToggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"}
          </button>

          {/* Font Size Selector */}
          <label style={{ display: "block", marginTop: "10px" }}>
            Font Size (Current: {fontSize}px):
            <input
              type="range"
              min="10"
              max="24"
              value={fontSize}
              onChange={handleSetFontSize} // Direct handler reference
            />
          </label>

          {/* 2. Nested State Toggle */}
          <fieldset>
            <legend>Notifications</legend>
            {Object.keys(notifications).map((key) => (
              <label key={key} style={{ marginRight: "15px" }}>
                <input
                  type="checkbox"
                  checked={notifications[key]}
                  // Inline function calls the dedicated handler
                  onChange={() => handleToggleNotification(key)}
                />
                {key.toUpperCase()}
              </label>
            ))}
          </fieldset>
        </fieldset>
      )}

      <p style={{ fontSize: fontSize }}>This text size changes dynamically.</p>
    </div>
  );
}

// const initialSettings = {
//   theme: "light",
//   fontSize: 16,
//   notifications: {
//     email: true,
//     sms: false,
//     push: true,
//   },
//   isEditing: false, // UI State
// };

// function settingsReducer(state, action) {
//   switch (action.type) {
//     case "TOGGLE_THEME":
//       return {
//         ...state,
//         theme: state.theme === "light" ? "dark" : "light",
//       };

//     case "SET_FONT_SIZE":
//       // Payload: { size: number }
//       return {
//         ...state,
//         fontSize: action.payload.size,
//       };

//     case "TOGGLE_NOTIFICATION":
//       // Payload: { type: 'email' | 'sms' | 'push' }
//       return {
//         ...state,
//         notifications: {
//           ...state.notifications, // Crucial for immutability!
//           [action.payload.type]: !state.notifications[action.payload.type],
//         },
//       };

//     case "TOGGLE_EDITING":
//       return {
//         ...state,
//         isEditing: !state.isEditing,
//       };

//     default:
//       return state;
//   }
// }

// ///////////////////////////////////////////////Component
// import React, { useReducer } from "react";

// // (Include the initialSettings and settingsReducer definitions from above)

// export function SettingsPanel() {
//   const [settings, dispatch] = useReducer(settingsReducer, initialSettings);

//   return (
//     <div
//       style={{
//         padding: "20px",
//         backgroundColor: settings.theme === "dark" ? "#333" : "#f0f0f0",
//         color: settings.theme === "dark" ? "white" : "black",
//       }}
//     >
//       <h2>User Settings ({settings.theme.toUpperCase()} Mode)</h2>

//       {/* 1. Simple Boolean Toggle */}
//       <button onClick={() => dispatch({ type: "TOGGLE_EDITING" })}>
//         {settings.isEditing ? "Done Editing" : "Edit Settings"}
//       </button>

//       {settings.isEditing && (
//         <fieldset style={{ marginTop: "15px" }}>
//           <legend>Appearance</legend>

//           {/* Theme Toggle */}
//           <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
//             Switch to {settings.theme === "light" ? "Dark" : "Light"}
//           </button>

//           {/* Font Size Selector (Requires Payload) */}
//           <label style={{ display: "block", marginTop: "10px" }}>
//             Font Size (Current: {settings.fontSize}px):
//             <input
//               type="range"
//               min="10"
//               max="24"
//               value={settings.fontSize}
//               onChange={(e) =>
//                 dispatch({
//                   type: "SET_FONT_SIZE",
//                   payload: { size: parseInt(e.target.value) },
//                 })
//               }
//             />
//           </label>

//           {/* 2. Nested State Toggle (Requires Key in Payload) */}
//           <fieldset>
//             <legend>Notifications</legend>
//             {Object.keys(settings.notifications).map((key) => (
//               <label key={key} style={{ marginRight: "15px" }}>
//                 <input
//                   type="checkbox"
//                   checked={settings.notifications[key]}
//                   onChange={() =>
//                     dispatch({
//                       type: "TOGGLE_NOTIFICATION",
//                       payload: { type: key },
//                     })
//                   }
//                 />
//                 {key.toUpperCase()}
//               </label>
//             ))}
//           </fieldset>
//         </fieldset>
//       )}

//       <p style={{ fontSize: settings.fontSize }}>
//         This text size changes dynamically.
//       </p>
//     </div>
//   );
// }
