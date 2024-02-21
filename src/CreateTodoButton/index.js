import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        // console.log('le diste clic');
        // console.log(event);
        // console.log(event.target);
        () => {
          setOpenModal(state => !state);
        }
      }
      >+</button>
  )
}

export { CreateTodoButton };