import React from "react";
import "./App.css";
import "./index.css";

import Todo from "./Components/Todo.js";
import TodoForm from "./Components/TodoForm";
import Footer from "./Components/Footer.js";
import useTodos from "./todoHooks.js";

const App = () => {
  const { todos, addTodo, completeTodo, removeTodo, clearCompleted, completeAll } = useTodos();
  
  return (
    <div className="todoapp">
      <div className="">
        <TodoForm addTodo={addTodo} completeAll={completeAll} />
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
        <Footer todos={todos} clearCompleted={clearCompleted} />
      </div>
    </div>
  );
};

export default App;
