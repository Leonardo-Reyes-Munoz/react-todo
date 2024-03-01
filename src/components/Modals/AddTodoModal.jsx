import './modal.css';
import { createTodoItem } from '../../utils/fetchUtil';
import toast, { Toaster } from 'react-hot-toast';

export default function AddTodoModal({ onClose, loadTodoListData, listId }) {
  async function handleAddSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    const newTitle = formProps.newTitle;
    const updatedDueDate = formProps.dueDate === '' ? null : formProps.dueDate;

    const response = await createTodoItem(newTitle, updatedDueDate, listId);
    onClose();
    loadTodoListData();
    toast.success(response);
  }

  return (
    <div className="modal">
      <Toaster />
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
