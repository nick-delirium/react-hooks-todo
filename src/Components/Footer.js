import React from "react";

const Footer = ({ todos, clearCompleted }) => {
  if (todos.length === 0) return;
  return (
    <footer className="footer">
      <span className="todo-count">{todos.length} items left</span>

      {todos.filter(item => item.isCompleted).length > 0 ? (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed ({todos.filter(item => item.isCompleted).length})
        </button>
      ) : null}
    </footer>
  );
};

export default Footer;
