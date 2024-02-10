import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate('/');
  }

  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.SiteTitle}>
        Task-Tackler
        <span className="material-symbols-outlined task-logo">task_alt</span>
      </a>
      <ul>
        {/* <li>
          <a href="/shared">
            <span className="material-symbols-outlined">groups</span>
          </a>
        </li>
        <li>
          <a href="/calendar">
            <span className="material-symbols-outlined">calendar_month</span>
          </a>
        </li> */}
        <li>
          <button type="button" onClick={handleLogout} className="logout-btn">
            <span className="material-symbols-outlined">logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
