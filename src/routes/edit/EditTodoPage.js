import React from "react"
import { useParams, useLocation } from "react-router-dom"
import { useTodos } from "../useTodos";
import { TodoForm } from "../../ui/TodoForm"

function EditTodoPage() {
    const location = useLocation()
    const params = useParams()
    const id = Number(params.id)
    const { state, updaters } = useTodos()
    const { loading, getTodo } = state
    const { editTodo } = updaters

    let todoText;

    if (location.state?.todo) {
        todoText = location.state.todo.text;
    } else if (loading) {
        return <p>Cargando...</p>
    } else {
        const todo = getTodo(id)
        todoText = todo?.text
    }
    
    return (
        <TodoForm
            label="Edita tu TODO"
            defaultTodoText={todoText}
            submitText="Editar"
            submitEvent={(newText) => editTodo(id, newText)}
        />
    )
}

export { EditTodoPage } // Export nombrados