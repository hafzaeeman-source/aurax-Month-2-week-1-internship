import TaskItem from "./TaskItem";

function TaskList({ tasks, totalTasks, onToggle, onEdit, onDelete }) {
  if (tasks.length === 0) {
    const title = totalTasks === 0 ? "No tasks yet" : "No matching tasks";
    const message =
      totalTasks === 0
        ? "Add your first task above and it will be saved in your browser."
        : "Try another filter or add a new task.";

    return (
      <div className="empty-state">
        <div className="empty-icon">✓</div>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;