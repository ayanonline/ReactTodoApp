import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
function App() {
  const [newInput, setNewInput] = useState("");
  const [lists, setLists] = useState([]);

  function inputHandle(event) {
    const value = event.target.value;
    setNewInput(value);
  }
  function clickHandle() {
    setLists((prevValue) => {
      return [...prevValue, newInput];
    });
    setNewInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputHandle} type="text" value={newInput} />
        <button onClick={clickHandle}>Add</button>
      </div>
      <div className="list">
        <ul>
          {lists.map((item) => (
            <TodoItem text={item} key={lists.indexOf(item)} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
