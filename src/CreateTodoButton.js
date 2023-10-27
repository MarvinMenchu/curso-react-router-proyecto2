import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log('le diste clic');
        console.log(event);
      }
      }
      >+</button>
  )
}

export { CreateTodoButton };