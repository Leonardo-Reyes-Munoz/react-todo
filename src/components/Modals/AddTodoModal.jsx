import './modal.css';
import { createTodoItem } from '../../utils/fetchUtil';

export default function AddTodoModal({ onClose, loadTodoList }) {
  async function handleAddSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    const newTitle = formProps.newTitle;
    const updatedDueDate = formProps.dueDate === '' ? null : formProps.dueDate;

    await createTodoItem(newTitle, updatedDueDate);
    onClose();
    loadTodoList();
  }

  return (
    <div className="modal">
      <div className="overlay" onClick={onClose}></div>
      <div className="modalContent">
        <h2 className="modalTitle">Add New Task</h2>
        <form onSubmit={handleAddSubmit}>
          <div className="inputItem">
            <label htmlFor="newTitle">Task</label>
            <input type="text" name="newTitle" id="newTitle" />
          </div>
          <div className="inputItem">
            <label htmlFor="dueDate"> Due: </label>
            <input type="date" name="dueDate" id="dueDate" />
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
