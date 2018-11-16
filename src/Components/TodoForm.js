import React, { useState } from "react";

function TodoForm({ addTodo, completeAll }) {
  const [value, setValue] = useState("");

  const submit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  return(
    <form onSubmit={submit}>
      <input onChange={completeAll} className="toggle-all" id='toggle-all' type='checkbox' name='toggle'></input>
      <label htmlFor='toggle-all'>Mark all as complete</label>
      <input type="text" className="new-todo"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Task..."
      />
    </form>
  );
}

export default TodoForm;