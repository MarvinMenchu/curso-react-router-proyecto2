import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import "../Modal/Modal.css";
import { TodoHeader } from "../TodoHeader";
import { EmptySearchResult } from '../EmptySearchResults';
import { ChangeAlert } from '../ChangeAlert';

function App() {

  const { state, updaters } = useTodos();

  const {
    loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      searchedTodos,
      openModal
  } = state

  const {
    setSearchValue,
      completeTodo,
      deleteTodo,
      setOpenModal,
      addTodo,
      sincronizeTodo
  } = updaters

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter 
            totalTodos={totalTodos} 
            completedTodos={completedTodos}
          />
          <TodoSearch 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
        />
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
        onEmptySearchResult={(searchValue) => <EmptySearchResult searchText={searchValue} />}
        render={todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )
        }
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
        setOpenModal={setOpenModal}
      />

      {openModal && (<Modal>
        <TodoForm 
          addTodo={addTodo}
          setOpenModal={setOpenModal}  
        />
      </Modal>)}
      <ChangeAlert sincronize={sincronizeTodo}  />
    </>
  );
}

export default App;