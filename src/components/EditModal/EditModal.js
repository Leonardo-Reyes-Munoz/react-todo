import styles from './EditModal.module.css';
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
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Edit Task</h2>
        <form onSubmit={handleEditSubmit}>
          <label htmlFor="newTitle">Task</label>
          <input
            type="text"
            defaultValue={title}
            name="newTitle"
            id="newTitle"
          />
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
