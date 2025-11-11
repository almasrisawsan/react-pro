import React, { useState, useMemo, useCallback, memo } from "react";

// ==========================================================
// 1. Expensive Calculation Simulation (UseMemo Target)
// ==========================================================

/**
 * Simulates a time-consuming operation (e.g., deep filtering, complex scoring).
 * This function should only run when the 'todos' list changes.
 * @param {Array<object>} todos - The list of todos.
 * @returns {number} The count of high-priority tasks.
 */
const expensiveHighPriorityCounter = (todos) => {
  console.log("--- [useMemo] RUNNING Expensive High Priority Count ---");
  // Simulate CPU heavy blocking operation (e.g., 200 million iterations)
  for (let i = 0; i < 200000000; i++) {
    // This loop just burns time
  }

  const highPriorityCount = todos.filter(
    (t) => t.priority === "High" && !t.completed
  ).length;
  console.log(
    `--- [useMemo] Calculation Finished. Found ${highPriorityCount} high priority tasks.`
  );
  return highPriorityCount;
};

// ==========================================================
// 2. Child Component (React.memo Target)
// ==========================================================

/**
 * Optimized component for rendering a single Todo item.
 * Uses React.memo to prevent unnecessary re-renders.
 * It expects a stable `toggleComplete` function (via useCallback).
 */
const TodoItem = memo(({ todo, toggleComplete }) => {
  // This log helps us track when the component actually re-renders.
  console.log(`    [TodoItem: ${todo.id}] RENDERED`);

  return (
    <div
      className={`flex justify-between items-center p-2 border-b transition-colors ${
        todo.completed
          ? "bg-green-100 text-gray-500 line-through"
          : "hover:bg-gray-50"
      }`}
    >
      <span className="text-sm">
        {todo.text}
        <span
          className={`ml-2 text-xs font-bold ${
            todo.priority === "High" ? "text-red-600" : "text-yellow-600"
          }`}
        >
          ({todo.priority})
        </span>
      </span>
      <button
        onClick={() => toggleComplete(todo.id)}
        className={`px-3 py-1 text-xs rounded transition-colors ${
          todo.completed
            ? "bg-gray-300"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
});

// ==========================================================
// 3. Main Application Component
// ==========================================================

const initialTodos = [
  { id: 1, text: "Master useMemo", completed: false, priority: "High" },
  {
    id: 2,
    text: "Implement useCallback",
    completed: false,
    priority: "Medium",
  },
  {
    id: 3,
    text: "Optimize component with memo",
    completed: false,
    priority: "High",
  },
  {
    id: 4,
    text: "Review performance logs",
    completed: true,
    priority: "Medium",
  },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  // Unrelated state used only to trigger parent re-renders quickly
  const [notificationCount, setNotificationCount] = useState(0);

  // --- useMemo Implementation ---
  // Memoizes the result of the expensive calculation.
  // Dependency: [todos]. Only recalculates if the todo list changes.
  const highPriorityCount = useMemo(
    () => expensiveHighPriorityCounter(todos),
    [todos]
  );
  // Dependency: The list itself

  // --- useCallback Implementation (Stable Function) ---
  // Memoizes the function reference. Essential for the TodoItem component (wrapped in memo)
  // to prevent re-rendering when the parent state (like notificationCount) changes.
  const toggleComplete = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    // Note: If we had a dependency on 'notificationCount', we would include it here.
    // Since this function only depends on 'setTodos' (which is stable) and the current 'id',
    // we could use an empty dependency array `[]` if we used the functional update form (prevTodos => ...),
    // but here we rely on the stable setTodos reference.
  }, []); // Empty array, uses functional update form for state setter

  // Unrelated action handler (for testing optimization)
  const handleUpdateNotifications = () => {
    setNotificationCount((prev) => prev + 1);
  };

  return (
    <div className="p-8 max-w-xl mx-auto space-y-6 bg-white shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-indigo-700">
        Optimized Todo List
      </h1>

      <div className="p-4 border rounded bg-yellow-50 space-y-3">
        <h2 className="text-xl font-semibold">Fast UI Interaction</h2>
        <p>
          Notifications:{" "}
          <span className="font-mono text-lg text-yellow-800">
            {notificationCount}
          </span>
        </p>
        <button
          onClick={handleUpdateNotifications}
          className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
        >
          Update Notification Count (Trigger Parent Re-render)
        </button>
      </div>

      <div className="p-4 border rounded bg-blue-50">
        <h2 className="text-xl font-semibold">useMemo Result</h2>
        <p className="text-gray-700">
          Uncompleted High Priority Tasks:{" "}
          <span className="font-mono text-2xl text-red-700">
            {highPriorityCount}
          </span>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Check the console. This result is only recalculated when a todo is
          completed or added, NOT when notifications update.
        </p>
      </div>

      {/* Todo List - Uses memoized function and components */}
      <div className="space-y-2 border p-4">
        <h2 className="text-xl font-semibold">
          Todo Items (Optimized with memo & useCallback)
        </h2>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete} // Stable function from useCallback
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
