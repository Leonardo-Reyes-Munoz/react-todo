import './EditModal.css';
import { updateTodoItem } from '../../utils/fetchUtil';

export default function EditModal({ onClose, todo, loadTodoList }) {
  const { title, id, dueDate } = todo;

  async function handleEditSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const newTitle = formProps.newTitle;
    await updateTodoItem(id, newTitle);
    onClose();
    loadTodoList();
  }

  return (
    <div className="modal">
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2 className="modal-title">Edit Task</h2>
        <form onSubmit={handleEditSubmit}>
          <label htmlFor="newTitle">Task</label>
          <input
            type="text"
            defaultValue={title}
            name="newTitle"
            id="newTitle"
          />
          <button type="submit">Submit Edit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
