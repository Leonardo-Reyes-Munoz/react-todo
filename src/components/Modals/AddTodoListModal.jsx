import './modal.css';
import toast, { Toaster } from 'react-hot-toast';

import { createTodoList } from '../../utils/fetchUtil';

export default function AddTodoListModal({ onClose, onSubmit }) {
  async function handleAddSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    const newTitle = formProps.newTitle;
    const todoListColor = formProps.color;

    console.log(newTitle, todoListColor);
    const response = await createTodoList(newTitle, todoListColor);
    toast.success(response);

    onSubmit();
    onClose();
  }

  return (
    <div className="modal">
      <Toaster />
      <div className="overlay" onClick={onClose}></div>
      <div className="modalContent">
        <h2 className="modalTitle">Add New List</h2>
        <form onSubmit={handleAddSubmit}>
          <div className="inputItem">
            <label htmlFor="newTitle">List name:</label>
            <input type="text" name="newTitle" id="newTitle" />
          </div>
          <div className="color-picker">
            <fieldset>
              <legend>Choose a color</legend>
              <input
                type="radio"
                id="color-yellow"
                name="color"
                value="yellow"
                defaultChecked
              ></input>
              <label
                htmlFor="color-yellow"
                style={{ backgroundColor: '#fae360' }}
              ></label>
              <input
                type="radio"
                name="color"
                id="color-green"
                value="green"
              ></input>
              <label
                htmlFor="color-green"
                style={{ backgroundColor: '#4e7868' }}
              ></label>
              <input
                type="radio"
                name="color"
                value="orange"
                id="color-purple"
              ></input>
              <label
                htmlFor="color-purple"
                style={{ backgroundColor: '#7d7278' }}
              ></label>
              <input
                type="radio"
                name="color"
                value="purple"
                id="color-pink"
              ></input>
              <label
                htmlFor="color-pink"
                style={{ backgroundColor: '#f06a8a' }}
              ></label>
            </fieldset>
          </div>
          <div className="btnContainer">
            <button type="submit" className="submitEdit">
              Add List
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
