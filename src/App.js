import React from 'react';
import './App.css';
import './index.css';

import Todo from "./Components/Todo.js";
import TodoForm from "./Components/TodoForm";
import Footer from "./Components/Footer.js";
import useTodos from "./todoHooks.js";

const App = () => {
  const { todos, addTodo, completeTodo, removeTodo, clearCompleted, completeAll } = useTodos();
  // const [todos, setTodos] = useState([
  //   { text: "Learn react", isCompleted: false },
  //   { text: "Learn hooks", isCompleted: false },
  //   { text: "Learn redux", isCompleted: false },
  // ]);

  // const addTodo = text => {
  //   const newTodos = [...todos, { text }];
  //   setTodos(newTodos);
  // }
  // const completeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = !newTodos[index].isCompleted;
  //   setTodos(newTodos);
  // }
  // const removeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos)
  // }
  // const clearCompleted = () => {
  //   const newTodos = todos.filter(item => item.isCompleted === false);
  //   setTodos(newTodos);
  // }
  // const completeAll = () => {
  //   const newTodos = todos.map(item => { item.isCompleted = !item.isCompleted; return item });
  //   setTodos(newTodos);
  // }

  return(
    <div className="todoapp">
      <div className="">
        <TodoForm addTodo={addTodo} completeAll={completeAll} />
        <ul className='todo-list'>
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
}

export default App;
