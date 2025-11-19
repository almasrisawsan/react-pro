import React, {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect,
} from "react";

// --- 1. HELPER: Render Counter ---
const RenderHighlighter = ({ name }) => {
  const renderCount = useRef(0);

  // Highlighting and logging logic runs on every render
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

// --- 2. THE CONTEXT ---
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// --- 3. COMPONENTS ---

// COMPONENT A: The Consumer (Settings)
// This component consumes the context function to change the state.
const Settings = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{ padding: "15px", border: "1px solid #1e88e5", margin: "10px" }}
    >
      <h4>
        Settings (Consumer) <RenderHighlighter name="Settings" />
      </h4>
      <button onClick={toggleTheme}>Toggle Theme via Context Function</button>
      <p>This component updates the context.</p>
    </div>
  );
};

// COMPONENT B: The Isolated/Memoized Non-Consumer (Display)
// This component is inside the Provider, but does NOT consume the context
// and is protected by React.memo.
const Display = () => {
  return (
    <div
      style={{ padding: "15px", border: "1px solid #4caf50", margin: "10px" }}
    >
      <h4>
        Static Display (Memoized Non-Consumer){" "}
        <RenderHighlighter name="Display" />
      </h4>
      <p>I am static content. I receive no props and use no context.</p>
      <p>I should only render once.</p>
    </div>
  );
};

// COMPONENT C: The Component that Renders based on Context
// This component ensures we see the change happen.
const ThemedContent = () => {
  const { theme } = useContext(ThemeContext);
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

const ComponentWithContext = () => {
  const [theme, setTheme] = useState("light");

  // Memoize the context value object
  const contextValue = React.useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
    }),
    [theme]
  ); // Only recreate this object when 'theme' changes

  /* 
        The Provider re-renders whenever 'contextValue' changes (i.e., when 'theme' changes).
        This forces all children to re-render, UNLESS protected by memo/optimization. 
      */

  return (
    <ThemeContext value={contextValue}>
      <Settings />

      <div style={{ display: "flex" }}>
        {/* 1. Memoized Non-Consumer */}
        <Display />

        {/* 2. Standard Consumer */}
        <ThemedContent />
      </div>
    </ThemeContext>
  );
};
// --- 4. MAIN APP COMPONENT ---
export default function ContextIsolationExample() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Context Isolation Demonstration</h1>
      <Display />
      <ComponentWithContext />
    </div>
  );
}
