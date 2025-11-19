import React, {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect,
} from "react";

// --- 1. HELPER: Render Counter to visualize updates ---
// This helps us see exactly when a component re-renders on screen
const RenderHighlighter = ({ name }) => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(
      `%c[${name}] re-rendered (Count: ${renderCount.current})`,
      "color: yellow; font-weight: bold;"
    );
  });

  return (
    <span
      style={{
        marginLeft: "10px",
        padding: "2px 6px",
        borderRadius: "4px",
        background: "#ffeb3b",
        color: "black",
        fontSize: "0.8rem",
      }}
    >
      Renders: {renderCount.current}
    </span>
  );
};

// --- 2. THE CONTEXT ---
const UserContext = createContext(null);

// --- 3. COMPONENTS ---

// COMPONENT A: The Consumer
// This component USES the context. It MUST re-render when context changes.
const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h3>
        User Profile (Consumer)
        <RenderHighlighter name="Profile" />
      </h3>
      <p>
        Current User: <strong>{user.name}</strong>
      </p>
    </div>
  );
};

// COMPONENT B: The "Victim" (Non-Consumer)
// This component DOES NOT use context.
// WITHOUT memo, it re-renders because the Parent (App) re-renders.
const Sidebar = () => {
  const user = useContext(UserContext);
  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }}>
      <h3>
        Sidebar (Non-Consumer)
        <RenderHighlighter name="Sidebar (No Memo)" />
      </h3>
      <p>I am static content. I don't care about the user {user.name}.</p>
    </div>
  );
};

// COMPONENT C: The Optimized Component (Memoized)
// This component is wrapped in React.memo.
// It checks its props. If props didn't change, it prevents the Parent-induced re-render.
const OptimizedSidebar = React.memo(() => {
  const user = useContext(UserContext);
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h3>
        Optimized Sidebar (Memo)
        <RenderHighlighter name="OptimizedSidebar" />
      </h3>
      <p>
        I am memoized. I won't re-render unless my props change {user.name}.
      </p>
    </div>
  );
});

// --- 4. MAIN APP COMPONENT ---
export default function ContextExampleApp() {
  const [user, setUser] = useState({ name: "Alice" });
  const [count, setCount] = useState(0); // Unrelated state

  console.log(`%c[App] re-rendered`, "color: cyan; font-weight: bold;");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>React Context & Rendering</h1>

      {/* Controls to trigger state changes */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() =>
            setUser({ name: user.name === "Alice" ? "Bob" : "Alice" })
          }
        >
          Toggle Context Value (User)
        </button>

        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ marginLeft: "10px" }}
        >
          Update Unrelated State ({count})
        </button>
      </div>

      {/* THE CONTEXT PROVIDER */}
      {/* 
         Problem: When 'user' or 'count' changes, 'App' re-renders.
         This forces a re-render of the Provider and all its children 
         UNLESS those children are memoized.
      */}
      <UserContext value={user}>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* 1. The Consumer: Will ALWAYS re-render when 'user' changes */}
          <Profile />

          {/* 2. The Standard Component: Will re-render whenever 'App' re-renders */}
          <Sidebar />

          {/* 3. The Memoized Component: Will NOT re-render if only 'user' changes */}
          <OptimizedSidebar />
        </div>
      </UserContext>
    </div>
  );
}
