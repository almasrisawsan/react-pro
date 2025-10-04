import List from "./components/day-4/RemoveFromArray";

export default function App() {
  return (
    <div style={{ padding: 100 }}>
      <List />
    </div>
  );
}

// 1. Nested Objects in State using immer -> NestedObject.jsx
// 2. Updating Arrays in State -> UpdateArray.jsx
// 3. Removing items from an array -> RemoveFromArray.jsx,
// 4. Ex10.jsx, Ex11.jsx
// 5. Transforming arrays with map -> TransformArray.jsx
// 6. Replacing items in an array -> ReplaceInArray.jsx
// 7. Inserting into an array -> InsertInArray.jsx
// 8. Making other changes to an array -> OtherArrayChanges.jsx
// 9. Updating objects inside arrays -> UpdateObjectsInArray.jsx
// 10. Write concise update logic with Immer -> Immer.jsx
// 11. Ex12.jsx, Ex13.jsx, Ex14.jsx
// 13. Choosing the State Structure
//Group related state. If you always update two or more state variables at the same time, consider merging them into a single state variable.
//Avoid contradictions in state. When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
//Avoid redundant state. If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.
//Avoid duplication in state. When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
//Avoid deeply nested state. Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.
// 14. Sharing State Between Components -> SharedState.jsx (lifting state up)
// 15. Ex15.jsx
// 16. Starting with hooks (useRef) -> RefExample.jsx
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
