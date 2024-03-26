import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodo
      } = useLocalStorage('TODOS_V2', []);
      const [searchValue, setSearchValue] = React.useState('');
      // const [openModal, setOpenModal] = React.useState(false);
    
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
    
      const getTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        console.log(todos[todoIndex]);
        return todos[todoIndex];
      }

      const addTodo = (text) => {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
          id
        });
        saveTodos(newTodos);
      }

      const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.id === id
        )
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }

      const editTodo = (id, newText) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.id === id
        )
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.id === id
        )
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }

    const state = {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      searchedTodos,
      // openModal
      getTodo
    }

    const updaters = {
      setSearchValue,
      completeTodo,
      deleteTodo,
      // setOpenModal,
      addTodo,
      sincronizeTodo,
      editTodo
    };

  return {
    state,
    updaters
  }
}

function newTodoId(todoList) {
  if (!todoList.length){
    return 1
  }
  const idList = todoList.map(todo => todo.id)
  const idMax = Math.max(...idList)
  return idMax + 1
}


export { useTodos }; // Export nombrados