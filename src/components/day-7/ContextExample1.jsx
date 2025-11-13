//Updating a value via context

import { createContext, memo, useContext, useState } from "react";

const ThemeContext = createContext("light");

export default function MyApp() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </ThemeContext>
  );
}

function Form() {
  const theme = useContext(ThemeContext);

  console.log("Theme in Form:", theme);
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

const Panel = memo(({ title, children }) => {
  const theme = useContext(ThemeContext);
  console.log("Theme in Panel:", theme);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
});

function Button({ children }) {
  const theme = useContext(ThemeContext);
  console.log("Theme in Button:", theme);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
