/* 
Create a component with two states: number (a number, initially 100) and multiplier (a number, initially 1).

Implement an "Expensive Calculation" function that takes num and mult as arguments and performs a loop that iterates a large number of times (e.g., a few million) to calculate a result, like num * mult but inside the loop to simulate a delay. Log "Calculating..." inside this function.

Call the "Expensive Calculation" function in the component body using the number and multiplier states. Display the result.

Add an input field to change the multiplier state.

Observe: Changing the multiplier state causes the component to re-render and the "Expensive Calculation" to run again (check the console).

Fix: Wrap the call to the "Expensive Calculation" function in useMemo, ensuring it only recalculates when its dependencies (number or multiplier) change.

Test: Change the multiplier—the calculation should run. Now, add another state, irrelevantState (a number), and a button to increment it. Incrementing irrelevantState should cause a re-render but not trigger the "Calculating..." log, demonstrating the caching.
*/
