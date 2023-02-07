import React, { useState } from "react";

function TodoItem(props) {
  const [isClick, setIsClick] = useState(false);
  function clickHandle() {
    setIsClick((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={clickHandle}
      style={{ textDecoration: isClick ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
