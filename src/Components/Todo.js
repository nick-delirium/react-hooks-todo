import React from "react";
import propTypes from "prop-types"
const Todo = ({ todo, index, completeTodo, removeTodo }) => (
  <li className={todo.isCompleted ? "completed" : ""}>
    <div className="view" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <input
        checked={todo.isCompleted || false}
        type="checkbox"
        className="toggle"
        onChange={() => completeTodo(index)}
      />
      <label>{todo.text}</label>
      {todo.isCompleted ? <button className="destroy" onClick={() => removeTodo(index)} /> : null}
    </div>
  </li>
);

Todo.propTypes = {
  todo: propTypes.shape({
    isCompleted: propTypes.bool.isRequired,
    text: propTypes.string.isRequired
  })
}
export default Todo;
