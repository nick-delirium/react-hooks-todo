import { useState, useEffect } from "react";

const exampleTodos = [
  { text: "Look at this beauty", isCompleted: true },
  { text: "Read the code", isCompleted: false },
  { text: "Contact author", isCompleted: false },
  { text: "Write feedback", isCompleted: false },
];

const useTodos = (initialValue = exampleTodos) => {
  const initialTodos = JSON.parse(window.localStorage.getItem("elmTodos")) || initialValue;
  const [todos, setTodos] = useState(initialTodos);
  // 💁‍ this effect will be called every time DOM tree updated, means that we'll always have fresh state in localstorage
  useEffect(() => {
    window.localStorage.setItem("elmTodos", JSON.stringify(todos));
  }, todos); // variable to watch or [] to run only on comp mount
  return {
    todos,
    addTodo: text => {
      const newTodos = [...todos, { text, isCompleted: false }];
      setTodos(newTodos);
    },
    completeTodo: index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
    },
    removeTodo: index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    },
    clearCompleted: () => {
      const newTodos = todos.filter(item => item.isCompleted === false);
      setTodos(newTodos);
    },
    completeAll: () => {
      const newTodos = todos.map(item => {
        if (item.isCompleted === false) item.isCompleted = !item.isCompleted;
        return item;
      });
      setTodos(newTodos);
    },
  };
};

export default useTodos;
