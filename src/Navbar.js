import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.SiteTitle}>
        Todo Buddy
      </a>
      <ul>
        <li>
          <a href="/shared">Shared Tasks</a>
        </li>
        <li>
          <a href="/calendar">Calendar View</a>
        </li>
      </ul>
    </nav>
  );
}
