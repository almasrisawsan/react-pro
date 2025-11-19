// --- ThemeProvider.js (Separate file logic) ---
import React, { useState, useMemo, createContext, useContext } from "react";

// 1. Context Definition (same as before)
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// 2. The Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Memoize the value object to prevent unnecessary downstream re-renders
  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
  // Note: ThemeProvider re-renders ONLY when 'theme' changes.
  // The 'children' passed to it will NOT re-render due to the Provider's update,
  // only if the children consume the context or if their own props change.
  //   return (
  //     <ThemeContext.Provider value={contextValue}>
  //       {children}
  //     </ThemeContext.Provider>
  //   );
}

// 3. Custom Hook for Consumers
export const useTheme = () => useContext(ThemeContext);
