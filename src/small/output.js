import React from "react";

function output(props) {
  return (
    <div>
      <div className="output">
        {props.todos.map((todo, index) => (
          <div
            key={index}
            className="todo"
            onDoubleClick={() => props.editFormTogle(index)}
          >
            <div className="todo-text">{todo} </div>
            <div
              className="todo-delete"
              onClick={() => props.deletetodos(index)}
            >
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default output;
