import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [count, setCount] = useState(12);

  const addValue = () => {
    setCount(count + 1);
    console.log(count);
  };

  const removeValue = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <div className="text-3xl bg-yellow-500 rounded-md m-[30px]">App</div>
      <h2> Counter Value: {count} </h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}> Remove Value </button>
      <p>{count}</p>
      <Card username="Manov" />
      <Card />
      <Card imgSource="https://images.unsplash.com/photo-1617788021453-15f98caff03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </>
  );
};

export default App;
