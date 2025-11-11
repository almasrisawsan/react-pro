import { act, useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

// {
// type: 'add' // 'edit' // 'delete'
// }
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "edit": {
      return tasks.map((t) => {
        if (t.id === action.editedTask.id) {
          return action.editedTask;
        } else {
          return t;
        }
      });
    }
    case "delete": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      return tasks;
    }
  }
}
export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "add",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "edit",
      editedTask: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({ type: "delete", id: taskId });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

// using useReducer
// import { useReducer } from 'react';
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//   function handleAddTask(text) {
//     dispatch({
//       type: 'added',
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: 'changed',
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: 'deleted',
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case 'added': {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case 'changed': {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case 'deleted': {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

// let nextId = 3;
// const initialTasks = [
//   {id: 0, text: 'Visit Kafka Museum', done: true},
//   {id: 1, text: 'Watch a puppet show', done: false},
//   {id: 2, text: 'Lennon Wall pic', done: false},
// ];

// AddTask.jsx
// import { useState } from 'react';

// export default function AddTask({onAddTask}) {
//   const [text, setText] = useState('');
//   return (
//     <>
//       <input
//         placeholder="Add task"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           setText('');
//           onAddTask(text);
//         }}>
//         Add
//       </button>
//     </>
//   );
// }

// TaskList.jsx
// import { useState } from 'react';

// export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>
//           <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Task({task, onChange, onDelete}) {
//   const [isEditing, setIsEditing] = useState(false);
//   let taskContent;
//   if (isEditing) {
//     taskContent = (
//       <>
//         <input
//           value={task.text}
//           onChange={(e) => {
//             onChange({
//               ...task,
//               text: e.target.value,
//             });
//           }}
//         />
//         <button onClick={() => setIsEditing(false)}>Save</button>
//       </>
//     );
//   } else {
//     taskContent = (
//       <>
//         {task.text}
//         <button onClick={() => setIsEditing(true)}>Edit</button>
//       </>
//     );
//   }
//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={task.done}
//         onChange={(e) => {
//           onChange({
//             ...task,
//             done: e.target.checked,
//           });
//         }}
//       />
//       {taskContent}
//       <button onClick={() => onDelete(task.id)}>Delete</button>
//     </label>
//   );
// }
