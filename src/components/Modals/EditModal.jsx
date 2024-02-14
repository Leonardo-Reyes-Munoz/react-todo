import './modal.css';
import { updateTodoItem } from '../../utils/fetchUtil';

export default function EditModal({ onClose, todo, loadTodoList }) {
  const { title, id, dueDate, isChecked } = todo;

  async function handleEditSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    const newTitle = formProps.newTitle;
    const updatedDueDate = formProps.dueDate === '' ? null : formProps.dueDate;

    console.log('Due Date:', updatedDueDate);

    await updateTodoItem(id, newTitle, isChecked, updatedDueDate);
    onClose();
    loadTodoList();
  }

  let formattedDueDate = '';

  if (dueDate) {
    formattedDueDate = dueDate.split('T')[0];
  }

  return (
    <div className="modal">
      <div className="overlay" onClick={onClose}></div>
      <div className="modalContent">
        <h2 className="modalTitle">Edit Task</h2>
        <form onSubmit={handleEditSubmit}>
          <div className="inputItem">
            <label htmlFor="newTitle">Task</label>
            <input
              type="text"
              defaultValue={title}
              name="newTitle"
              id="newTitle"
            />
          </div>
          <div className="inputItem">
            <label htmlFor="dueDate"> Due: </label>
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              defaultValue={formattedDueDate}
            />
          </div>
          <div className="btnContaine">
            <button type="submit" className="submitEdit">
              Submit Edit
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
