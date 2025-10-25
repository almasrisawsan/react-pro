/*
Create a Parent Component with a state value (a number).

Create a memoized Child Component (using React.memo) that accepts an onClick function prop and logs "Memoized Child Rendered" on render. The child renders a button that calls onClick.

In the Parent Component, define a function handleClick that increments the value state. Pass this function as the onClick prop to the memoized Child Component.

Add a state in the Parent Component, count (a number), and a button to increment it.

Observe: When you click the "Increment Count" button (in the Parent), the parent re-renders, and the memoized child also unnecessarily re-renders (check the console). This happens because the handleClick function is re-created on every Parent render, breaking React.memo's shallow comparison.

Fix: Wrap the handleClick function in the Parent Component with useCallback. Use an empty dependency array ([]) if the function doesn't use any props or state from the Parent, or include them if it does (in this case, since handleClick uses setValue, you'd need the setter if not using the functional update form, but for simplicity, you can use the functional update setValue(prev => prev + 1) and an empty array).

Test: Increment the count state again and verify that the memoized Child Component no longer re-renders. Clicking the button in the child should still increment the value state.
*/
