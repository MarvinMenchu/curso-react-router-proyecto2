import React from "react"
import { TodoForm } from "../../ui/TodoForm"
import { useTodos } from "../useTodos";

function NewTodoPage() {
    const { updaters } = useTodos();
    const { addTodo } = updaters;
    return (
        <TodoForm
            label="Escribe tu nuevo TODO"
            submitText="Añadir"
            submitEvent={(text) => addTodo(text)}
        />
    )
}

export { NewTodoPage } // Export nombrados