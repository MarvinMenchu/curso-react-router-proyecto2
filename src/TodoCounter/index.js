import React from "react";
import "./TodoCounter.css";

function TodoCounter( { totalTodos, completedTodos} ) {

  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    </h1>
  );
}

export { TodoCounter }; // Export nombrados
