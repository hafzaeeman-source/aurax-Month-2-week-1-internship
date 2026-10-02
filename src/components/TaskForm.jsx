import { useEffect, useState } from "react";

function TaskForm({
  onAddTask,
  onUpdateTask,
  editingTask,
  onCancelEdit
}) {
  const [taskText, setTaskText] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTaskText(editingTask.text);
      setValidationMessage("");
    } else {
      setTaskText("");
      setValidationMessage("");
    }
  }, [editingTask]);

  function validateTask(text) {
    const cleanedText = text.trim();

    if (cleanedText === "") {
      setValidationMessage("Please enter a task.");
      return false;
    }

    if (cleanedText.length < 3) {
      setValidationMessage("Task must contain at least 3 characters.");
      return false;
    }

    setValidationMessage("");
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateTask(taskText)) {
      return;
    }

    if (editingTask) {
      onUpdateTask(editingTask.id, taskText);
    } else {
      onAddTask(taskText);
      setTaskText("");
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    setTaskText(value);

    if (value.trim() !== "") {
      setValidationMessage("");
    }
  }

  function handleCancel() {
    setTaskText("");
    setValidationMessage("");
    onCancelEdit();
  }

  return (
    <section className="task-form-section">
      <h2>{editingTask ? "Edit task" : "Add a task"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="taskInput">Task name</label>
            <input
              id="taskInput"
              type="text"
              value={taskText}
              onChange={handleChange}
              className={validationMessage ? "input-error" : ""}
              placeholder="e.g. Complete React practice"
              aria-describedby="validationMessage"
            />
            <span
              id="validationMessage"
              className="validation-message"
              role="alert"
            >
              {validationMessage}
            </span>
          </div>

          <button type="submit" className="primary-btn">
            {editingTask ? "Update Task" : "Add Task"}
          </button>

          {editingTask && (
            <button
              type="button"
              className="secondary-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default TaskForm;