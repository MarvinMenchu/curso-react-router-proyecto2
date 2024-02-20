import React, { useEffect } from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomas el curso de Intro a React.js', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'LALALALALA', completed: false},
//   {text: 'Usar estados derivados', completed: true}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1');

function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  // Estados derivados, san variables calculos de un estado
  // doble negacion !! para saber que estamos trabajando con valores falso y verdadero
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;



  // Estado derivados
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    } 
  );

  //console.log("Los usuarios usan Todos de " + searchValue);

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
