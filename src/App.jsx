import Counter from "./components/day-4/ReplaceState2";

export default function App() {
  return (
    <div style={{ padding: 100 }}>
      <Counter />
    </div>
  );
}

// 1. Styling React components -> InlineStyle.jsx, CssStyle.jsx, CSSModules.jsx, StyledComponents.jsx, other options like emotion, tailwind ... etc
// 2. Responding to events -> Events.jsx, passing event handlers as props -> EventProps.jsx, Naming event handler props -> NamingEvents.jsx
// 3. Event Propagation -> EventPropagation.jsx, Preventing default behavior -> PreventDefault.jsx
// 4. Ex4.jsx , Ex5.jsx
// 5. State -> Components memory -> slider folder -> Slider.jsx, SliderDetails.jsx
// 6. State is isolated -> Gallery.jsx
// 7. Ex6.jsx , Ex7.jsx
// 8. Render & Commit:
//    Triggering a render (delivering the guest’s order to the kitchen)
//.   Rendering the component (preparing the order in the kitchen)
//.   Committing to the DOM (placing the order on the table)
// 9. Triggering re render -> ReRender.jsx
// 10. Updating the state -> UpdateState.jsx
// 11. Queueing a Series of State Updates -> StateAsync.jsx
// 12. Updating the same state multiple times before the next render -> FunctionalUpdates.jsx
// 13. What happens if you update state after replacing it? -> ReplaceState.jsx
// 14. What happens if you replace state after updating it? -> ReplaceState2.jsx
// 15. Ex8.jsx, Ex9.jsx
// 16. Updating Objects in State -> UpdateObject.jsx
// 17. Copying objects with the spread syntax -> SpreadOperator.jsx
// 18. Updating a nested object -> NestedObject.jsx
// 19. Ex10.jsx, Ex11.jsx
// 20. Updating Arrays in State -> UpdateArray.jsx, Removing items from an array -> RemoveFromArray.jsx,
//     Transforming arrays with map -> TransformArray.jsx
// Replacing items in an array -> ReplaceInArray.jsx
// 21. Calculator App
