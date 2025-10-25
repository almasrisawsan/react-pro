console.time("filter array");
const visibleTodos = useMemo(() => {
  return filterTodos(todos, tab); // Skipped if todos and tab haven't changed
}, [todos, tab]);
console.timeEnd("filter array");
