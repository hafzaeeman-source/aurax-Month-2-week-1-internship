function Header({ taskCount }) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">AUREX INTERNSHIP · MONTH 2</p>
        <h1>React Task Manager</h1>
        <p className="subtitle">
          A component-driven task manager built with React.js and Vite.
        </p>
      </div>

      <div className="task-count" aria-label={`${taskCount} visible tasks`}>
        <strong>{taskCount}</strong>
        <span>Visible tasks</span>
      </div>
    </header>
  );
}

export default Header;