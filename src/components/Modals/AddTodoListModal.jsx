import './modal.css';
import toast, { Toaster } from 'react-hot-toast';

export default function AddTodoListModal({ onClose }) {
  async function handleAddSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    const newTitle = formProps.newTitle;
    const todoListColor = formProps.color;
    console.log(newTitle, todoListColor);

    onClose();
  }

  return (
    <div className="modal">
      <Toaster />
      <div className="overlay" onClick={onClose}></div>
      <div className="modalContent">
        <h2 className="modalTitle">Add New Task List</h2>
        <form onSubmit={handleAddSubmit}>
          <div className="inputItem">
            <label htmlFor="newTitle">List name:</label>
            <input type="text" name="newTitle" id="newTitle" />
          </div>
          <div className="color-picker">
            <fieldset>
              <legend>Choose a color</legend>
              <input type="radio" name="color" value="yellow"></input>
              <input type="radio" name="color" value="green"></input>
              <input type="radio" name="color" value="orange"></input>
              <input type="radio" name="color" value="purple"></input>
            </fieldset>
          </div>
          <div className="btnContainer">
            <button type="submit" className="submitEdit">
              Add Task
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
