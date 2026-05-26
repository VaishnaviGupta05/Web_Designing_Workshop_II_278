import React, { useState } from "react";

function App() {
  // Creating state variable
  const [count, setCount] = useState(0);

  // Event handlers
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter Application</h1>

      <h2>Counter Value: {count}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default App;