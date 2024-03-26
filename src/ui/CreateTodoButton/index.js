import './CreateTodoButton.css';

function CreateTodoButton(props) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        // console.log('le diste clic');
        // console.log(event);
        // console.log(event.target);
        // () => {
        //   setOpenModal(state => !state);
        // }
        props.onClick
      }
      >+</button>
  )
}

export { CreateTodoButton };