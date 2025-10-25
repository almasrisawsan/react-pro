/// Example1
function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [fullName, setFullName] = useState("");
  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);
  // ...
}

// // correct:
// function Form() {
//   const [firstName, setFirstName] = useState("Taylor");
//   const [lastName, setLastName] = useState("Swift");
//   // ✅ Good: calculated during rendering
//   const fullName = firstName + " " + lastName;
//   // ...
// }

//Example2
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [visibleTodos, setVisibleTodos] = useState([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  // ...
}

// //correct:
// function TodoList({ todos, filter }) {
//   const [newTodo, setNewTodo] = useState("");
//   // ✅ This is fine if getFilteredTodos() is not slow.
//   const visibleTodos = getFilteredTodos(todos, filter);
//   // ...
// }

// Example3
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState("");

  // 🔴 Avoid: Resetting state on prop change in an Effect
  useEffect(() => {
    setComment("");
  }, [userId]);
  // ...
}

//correct:
// export default function ProfilePage({ userId }) {
//   return (
//     <Profile
//       userId={userId}
//       key={userId}
//     />
//   );
// }

// function Profile({ userId }) {
//   // ✅ This and any other state below will reset on key change automatically
//   const [comment, setComment] = useState('');
//   // ...
// }

//Example4
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  useEffect(() => {
    setSelection(null);
  }, [items]);
  // ...
}

//correct
// function List({ items }) {
//   const [isReverse, setIsReverse] = useState(false);
//   const [selectedId, setSelectedId] = useState(null);
//   // ✅ Best: Calculate everything during rendering
//   const selection = items.find((item) => item.id === selectedId) ?? null;
//   // ...
// }

//Example5:
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount(c => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound(r => r + 1)
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    alert('Good game!');
  }, [isGameOver]);

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.');
    } else {
      setCard(nextCard);
    }
  }


  //Correct
//   function Game() {
//   const [card, setCard] = useState(null);
//   const [goldCardCount, setGoldCardCount] = useState(0);
//   const [round, setRound] = useState(1);

//   // ✅ Calculate what you can during rendering
//   const isGameOver = round > 5;

//   function handlePlaceCard(nextCard) {
//     if (isGameOver) {
//       throw Error('Game already ended.');
//     }

//     // ✅ Calculate all the next state in the event handler
//     setCard(nextCard);
//     if (nextCard.gold) {
//       if (goldCardCount <= 3) {
//         setGoldCardCount(goldCardCount + 1);
//       } else {
//         setGoldCardCount(0);
//         setRound(round + 1);
//         if (round === 5) {
//           alert('Good game!');
//         }
//       }
//     }
//   }