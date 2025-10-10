import Accordion from "./components/day-5/SharedState";

export default function App() {
  return (
    <div style={{ padding: 100 }}>
      <Accordion />
    </div>
  );
}

// 1. Sharing State Between Components -> SharedState.jsx (lifting state up)
// 2. Ex15.jsx
// 3. Starting with hooks (useRef) -> RefExample.jsx
//When to use useRef:
//To access a DOM element directly.
//To keep a mutable value around that does not trigger a re-render when updated.
//To store a reference to an interval or timeout so you can clear it later.
// 17. Accessing DOM elements -> DomRef.jsx
// 18. Accessing another component’s DOM nodes -> DomRefExample.jsx
// 19. Synchronizing with Effects -> SyncWithEffects.jsx
// 20. Add cleanup -> Cleanup.jsx , EffectExample.jsx
// Rule -> You can’t “choose” your dependencies. They are determined by the code inside the Effect.
// 21. Ex16.jsx, Ex17.jsx, Ex18.jsx
