// console.time("filter array");
// const visibleTodos = useMemo(() => {
//   return filterTodos(todos, tab); // Skipped if todos and tab haven't changed
// }, [todos, tab]);
// console.timeEnd("filter array");

import { useEffect, useMemo, useState } from "react";

function filterTodos(todos, filters) {
  // Simulate a slow function
  console.log("Filtering todos...");
  return todos;
}

const TodoList = (todos, filters) => {
  const filteredTodos = useMemo(
    () => filterTodos(todos, filters),
    [todos, filters]
  );

  return (
    <>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </>
  );
};

export default TodoList;
