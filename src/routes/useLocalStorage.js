import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}))

  const {
    sincronizedItem,
    error,
    loading,
    item
  } = state

  // ACTIONS CREATORs
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error})
  const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem})
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item})
  const onSincronize = () => dispatch({ type: actionTypes.sincronize})
  // const [item, setItem] = React.useState(initialValue);
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [sincronizedItem, setSincronizedItem] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          onSave(item)
          // setItem(parsedItem);
        }
        onSuccess(parsedItem)
        // setLoading(false);
        // setSincronizedItem(true);
      } catch (error) {
        onError(error)
        //setLoading(false);
        //setError(true);
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSave(newItem)
  };

  const sincronizeItem = () => {
    onSincronize()
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  };
}

const initialState = ({initialValue}) => (
  {
    sincronizeItem: true,
    loading: true,
    error: false,
    item: initialValue
  }
)

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE"
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: payload
  },
  [actionTypes.success]: {
    ...state,
    loading: false,
    error: false,
    sincronizedItem: true,
    item: payload
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false
  }
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage };

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomas el curso de Intro a React.js', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'LALALALALA', completed: false},
//   {text: 'Usar estados derivados', completed: true}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1');