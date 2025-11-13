// Manage the state of a simple shopping cart, requiring trainees to use the payload to identify which item to modify.
// Requirements
// The state should be an array of item objects, each having id, name, and quantity.
// Implement the following actions:
// ADD_ITEM: Adds a new item object to the cart array. The payload should include the new item's details (id, name).
// UPDATE_QUANTITY: Increases or decreases the quantity of an existing item identified by its id.
// REMOVE_ITEM: Removes an item entirely from the array.

import React, { useReducer } from "react";

const initialCart = [
  { id: 101, name: "Laptop", quantity: 1 },
  { id: 102, name: "Mouse", quantity: 2 },
];

// --- STEP 1: Define the Reducer Function ---
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // Payload: { id, name }
      // The new item always starts with quantity: 1
      return [
        /* ... */
      ];

    case "UPDATE_QUANTITY":
      // Payload: { id, change } (change will be +1 or -1)
      // HINT: Use .map() to find and update the item quantity.
      return state.map((item) => {
        // ...
      });

    case "REMOVE_ITEM":
      // Payload: { id }
      // HINT: Use .filter()
      return state.filter(/* ... */);

    default:
      return state;
  }
}

// --- STEP 2: The Component ---
export function CartExercise() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const handleUpdate = (id, change) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, change } });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: `New Item ${Math.floor(Math.random() * 100)}`,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  return (
    <div style={{ padding: "20px", border: "1px solid green" }}>
      <h3>Exercise 2: Shopping Cart State</h3>

      <button onClick={handleAddItem}>Add Random Item</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 0",
            }}
          >
            {item.name} (Qty: {item.quantity})
            <div>
              <button onClick={() => handleUpdate(item.id, 1)}>+</button>
              <button
                onClick={() => handleUpdate(item.id, -1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
