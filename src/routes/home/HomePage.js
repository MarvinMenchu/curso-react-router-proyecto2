import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { TodosLoading } from "../../ui/TodosLoading";
import { TodosError } from "../../ui/TodosError";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { TodoForm } from "../../ui/TodoForm"
import { Modal } from "../../ui/Modal";
import "../../ui/Modal/Modal.css";
import { TodoHeader } from "../../ui/TodoHeader";
import { EmptySearchResult } from "../../ui/EmptySearchResults";
import { ChangeAlert } from "../../ui/ChangeAlert";


function HomePage() {
  const { state, updaters } = useTodos();
  const navigate = useNavigate();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    // openModal,
  } = state;

  const {
    setSearchValue,
    completeTodo,
    deleteTodo,
    // setOpenModal,
    // addTodo,
    sincronizeTodo,
  } = updaters;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      {/* Render Props */}
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={(searchValue) => (
          <EmptySearchResult searchText={searchValue} />
        )}
        render={(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onEdit={() => {
              navigate(`/edit/${todo.id}`, {
                state: { todo }
              })
            }}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      >
        {/* {todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )} */}
      </TodoList>
      <CreateTodoButton
        onClick={() => navigate("/new")}
        // setOpenModal={setOpenModal} 
      />

      {/* {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}
      <ChangeAlert sincronize={sincronizeTodo} />
    </>
  );
}

export { HomePage };
