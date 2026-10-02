function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <button
        type="button"
        className="check-btn"
        onClick={() => onToggle(task.id)}
        aria-label={
          task.completed
            ? `Mark ${task.text} as active`
            : `Mark ${task.text} as completed`
        }
      >
        {task.completed ? "✓" : ""}
      </button>

      <span className="task-text">{task.text}</span>

      <div className="task-actions">
        <button
          type="button"
          className="icon-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        <button
          type="button"
          className="icon-btn delete"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;