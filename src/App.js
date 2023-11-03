import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = (e) => {
    setCounter(counter + 1);
  };
  const handleClickTen = (e) => {
    setCounter(counter + 10);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={handleClick}>x</button>
      <h2>Current count: {counter}</h2>
      <button onClick={handleClickTen}>y</button>
    </div>
  );
}
