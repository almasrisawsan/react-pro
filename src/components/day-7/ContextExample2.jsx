//Updating an object via context
import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Form />
    </CurrentUserContext>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  if (currentUser !== null) {
    return (
      <>
        <p>You logged in as {currentUser.name}.</p>
        <p>Your age is {currentUser.age}.</p>
        <p>Your fav color is {currentUser.color}.</p>
      </>
    );
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Advika", age: 30, color: "white" });
      }}
    >
      Log in as Advika
    </Button>
  );
}

const Panel = ({ title, children }) => {
  console.log("Rendering Panel:", title);
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
};

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
