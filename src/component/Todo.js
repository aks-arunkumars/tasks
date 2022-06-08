import React, { useState } from "react";
//Component
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
//UUID for unique id
import { v4 as uuid } from "uuid";

export default function Todo() {
  const [toDos, setToDos] = useState([]);

  const handleSubmit = (toDo) => {
    setToDos([...toDos, { id: uuid(), task: toDo, isDone: false }]);

  };
  const removeToDo = (id) => {
    const filter = toDos.filter((value) => {
      if (value.id === id) return null;
      else return value;
    });
    setToDos(filter);

  };
  const handleToggle = (id) => {
    const checkedToDos = toDos.map((value) => {
      if (value.id === id) value.isDone = !value.isDone;
      return value;
    });
    setToDos(checkedToDos);

  };
  const submitEditToDo = (id, newEditedToDo) => {
    const todoAfterEdit = [...toDos].map((value) => {
      if (value.id === id) {
        value.task = newEditedToDo;
      }
      return value;
    });
    setToDos(todoAfterEdit);
    // console.log(toDos);
  };

  return (
    <div className="container">
      <TodoInput handleSubmit={handleSubmit} />
      <TodoList
        toDos={toDos}
        removeToDo={removeToDo}
        handleToggle={handleToggle}
        submitEditToDo={submitEditToDo}
      />
    </div>
  );
}