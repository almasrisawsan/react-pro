import React, { memo } from "react";

// ButtonComponent.jsx
// 1. Wrap the child component in React.memo()
const ButtonComponent = memo(({ onClick, label }) => {
  // This log will only appear when the component *actually* re-renders
  console.log(`[ButtonComponent] RENDERED: ${label}`);

  return (
    <button onClick={onClick} style={{ margin: "10px" }}>
      {label}
    </button>
  );
});

export default ButtonComponent;
