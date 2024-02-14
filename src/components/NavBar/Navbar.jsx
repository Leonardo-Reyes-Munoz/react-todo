import styles from './Navbar.module.css';

export default function Navbar({ handleLogout }) {
  const userName = localStorage.getItem('userName');

  const capitalizedUserName =
    userName.charAt(0).toUpperCase() + userName.slice(1);

  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.SiteTitle}>
        Task-Tackler
        <span className="material-symbols-outlined task-logo">task_alt</span>
      </a>
      <ul>
        <li>
          <span className="user-name">{`Hello ${capitalizedUserName}!`}</span>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleLogout()}
            className="logout-btn"
          >
            <span className="material-symbols-outlined">logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
