import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.SiteTitle}>
        Task-Tackler <span className="material-symbols-outlined">task_alt</span>
      </a>
      <ul>
        <li>
          <a href="/shared">
            <span className="material-symbols-outlined">groups</span>
          </a>
        </li>
        <li>
          <a href="/calendar">
            <span className="material-symbols-outlined">calendar_month</span>
          </a>
        </li>
        <li>
          <a href="/logout">
            <span className="material-symbols-outlined">logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
