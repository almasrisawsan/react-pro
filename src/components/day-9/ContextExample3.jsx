// --- Main App Component File ---
import React, { useState, useRef, useEffect, useContext } from "react";
import { ThemeProvider, useTheme } from "./ThemeProvider"; // Import the separated logic

// --- HELPER: Render Counter (same as before) ---
const RenderHighlighter = ({ name }) => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
    console.log(
      `%c[${name}] re-rendered (Count: ${renderCount.current})`,
      "color: orange; font-weight: bold;"
    );
  });

  return (
    <span
      style={{
        marginLeft: "10px",
        padding: "2px 6px",
        borderRadius: "4px",
        background: "#ffc107",
        color: "black",
        fontSize: "0.8rem",
      }}
    >
      Renders: {renderCount.current}
    </span>
  );
};

// COMPONENT A: The Consumer (Settings)
const Settings = () => {
  // Use the custom hook
  const { toggleTheme } = useTheme();
  return (
    <div
      style={{ padding: "15px", border: "1px solid #1e88e5", margin: "10px" }}
    >
      <h4>
        Settings (Consumer) <RenderHighlighter name="Settings" />
      </h4>
      <button onClick={toggleTheme}>Toggle Theme via Context Function</button>
    </div>
  );
};

// COMPONENT B: The Non-Context Parent/Sibling
// This component is now the "Unrelated Sibling" to the ThemeProvider
const UnrelatedSibling = () => {
  const [data, setData] = useState(0); // Local, unrelated state

  // If the root App component updates, this component re-renders.
  // But if the ThemeProvider updates, this component should NOT re-render.

  return (
    <div
      style={{ padding: "15px", border: "1px solid purple", margin: "10px" }}
    >
      <h4>
        Unrelated Sibling <RenderHighlighter name="UnrelatedSibling" />
      </h4>
      <p>Local state: {data}</p>
      <button onClick={() => setData((d) => d + 1)}>Update Local State</button>
    </div>
  );
};

// COMPONENT C: The Component that Renders based on Context
const ThemedContent = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#222" : "#eee",
        color: theme === "dark" ? "white" : "black",
        padding: "20px",
        marginTop: "10px",
      }}
    >
      Current Theme: <strong>{theme.toUpperCase()}</strong>
      <RenderHighlighter name="ThemedContent" />
    </div>
  );
};

// --- 4. THE ROOT APP COMPONENT ---
export default function ContextCompositionExample() {
  // Root App is now clean and has NO state related to the theme.
  console.log(`%c[Root App] re-rendered`, "color: cyan; font-weight: bold;");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Context Isolation via Provider Composition</h1>
      <UnrelatedSibling />{" "}
      {/* This component is completely outside the Provider's state */}
      {/* 
        The ThemeProvider is now an ISOLATED PARENT.
        When its state (theme) changes, only ThemeProvider re-renders 
        and only its direct children who use the context will update.
        UnrelatedSibling and Root App remain completely unaffected by theme changes.
      */}
      <ThemeProvider>
        <h3>Content inside the Theme Provider:</h3>
        <Settings />
        <ThemedContent />
      </ThemeProvider>
    </div>
  );
}
