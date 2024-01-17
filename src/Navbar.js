export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Todo Buddy
      </a>
      <ul>
        <li className="active">
          <a href="/shared">Shared Tasks</a>
        </li>
        <li>
          <a href="/calendar">Calendar View</a>
        </li>
      </ul>
    </nav>
  );
}
