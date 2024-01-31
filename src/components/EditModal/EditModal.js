import styles from './EditModal.module.css';
import { updateTodoItem } from '../../utils/fetchUtil';

export default function EditModal({ onClose, todo, loadTodoList }) {
  const { title, id, dueDate } = todo;

  async function handleEditSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    const newTitle = formProps.newTitle;
    const updatedDueDate = formProps.dueDate === '' ? null : formProps.dueDate;

    console.log('Due Date:', updatedDueDate);

    await updateTodoItem(id, newTitle, updatedDueDate);
    onClose();
    loadTodoList();
  }

  console.log(dueDate);

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Edit Task</h2>
        <form onSubmit={handleEditSubmit}>
          <div className={styles.inputItem}>
            <label htmlFor="newTitle">Task</label>
            <input
              type="text"
              defaultValue={title}
              name="newTitle"
              id="newTitle"
            />
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="dueDate"> Due: </label>
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              defaultValue={dueDate}
            />
          </div>
          <div className={styles.btnContainer}>
            <button type="submit" className={styles.submitEdit}>
              Submit Edit
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
              className={styles.cancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
