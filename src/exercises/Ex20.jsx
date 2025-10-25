/*
Task:

Create a Parent Component with two pieces of state: count (a number) and message (a string).

Create a Child Component that accepts a message prop (a string) and logs "Child Component Rendered" to the console on every render. Display the message.

In the Parent Component, render the Child Component, passing the message state as a prop.

Add a button in the Parent Component that increments the count state.

Observe: When you click the "Increment Count" button, the Parent Component re-renders, and the Child Component unnecessarily re-renders as well (check the console).

Fix: Wrap the Child Component in React.memo and verify that clicking the "Increment Count" button no longer causes the child to re-render.

Challenge: Add another button in the Parent Component that changes the message state, and confirm the child does re-render in this case.
*/
