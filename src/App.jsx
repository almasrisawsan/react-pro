import InfiniteLoopExample from "./components/day-6/MaxUpdate";

export default function App() {
  return (
    <div style={{ padding: 100 }}>
      <InfiniteLoopExample />
    </div>
  );
}

// 1. Sharing State Between Components -> SharedState.jsx (lifting state up)
// 2. Ex15.jsx
// 3. Starting with hooks (useRef) -> RefExample.jsx
//When to use useRef:
//To access a DOM element directly.
//To keep a mutable value around that does not trigger a re-render when updated -> RefExample.jsx
//To store a reference to an interval or timeout so you can clear it later -> StopWatch.jsx
// 4. Accessing DOM elements -> DomRef.jsx
// 5. Accessing another component’s DOM nodes -> DomRefExample.jsx

// 6. Synchronizing with Effects -> SyncWithEffects.jsx
// 7. Specify the Effect dependencies -> Dependencies.jsx
// 8. Max update depth exceeded -> MaxUpdate.jsx
// 9. Add cleanup -> Cleanup.jsx , EffectExample.jsx
// When do you use effect? *** Most of the Effects you’ll write will fit into one of the common patterns below.*** -> Example2.jsx
// You don't need effect when -> Example3.jsx
// Rule -> You can’t “choose” your dependencies. They are determined by the code inside the Effect.
// 10. Ex16.jsx, Ex17.jsx, Ex18.jsx
// 11. You might not need an effect:
// - Updating state based on props or state -> Example1
// - Caching expensive calculations -> Example2
// - Resetting all state when a prop changes -> Example3
// - Adjusting some state when a prop changes -> Example4
// - Chains of computations -> Example5
// 12. Callback hell -> CallbackHell.jsx
// 13. Ex19.jsx
// 14. Memo -> Unchanged.jsx
// 15. useMemo ->  Call useMemo at the top level of your component to cache a calculation between re-renders: -> MemoExample.jsx
// - How to tell if its expensive calculation?
// 16. useCallback: is a React Hook used for performance optimization by preventing unnecessary re-creation of a function during a component's re-renders. - > Callback.jsx
// 17. Exercises: Ex20.jsx, Ex21.jsx, Ex22.jsx
