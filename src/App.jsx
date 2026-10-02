import { useMemo, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const STORAGE_KEY = "aurexWeek4Tasks";

function loadTasks() {
  const savedTasks = localStorage.getItem(STORAGE_KEY);

  if (!savedTasks) {
    return [];
  }

  try {
    return JSON.parse(savedTasks);
  } catch (error) {
    console.error("Could not read saved tasks:", error);
    return [];
  }
}

function createTask(text) {
  return {
    id: Date.now(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };
}

function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);

  function saveTasks(updatedTasks) {
    setTasks(updatedTasks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
  }

  function addTask(text) {
    const newTask = createTask(text);
    saveTasks([...tasks, newTask]);
  }

  function updateTask(id, newText) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText.trim() } : task
    );

    saveTasks(updatedTasks);
    setEditingTask(null);
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    saveTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    saveTasks(updatedTasks);

    if (editingTask?.id === id) {
      setEditingTask(null);
    }
  }

  function clearCompleted() {
    saveTasks(tasks.filter((task) => !task.completed));
  }

  function clearAllTasks() {
    if (tasks.length === 0) {
      return;
    }

    const confirmed = window.confirm(
      "Delete all tasks? This cannot be undone."
    );

    if (confirmed) {
      saveTasks([]);
      setEditingTask(null);
    }
  }

  const visibleTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  return (
    <main className="app-shell">
      <section className="app-card">
        <Header taskCount={visibleTasks.length} />

        <TaskForm
          onAddTask={addTask}
          onUpdateTask={updateTask}
          editingTask={editingTask}
          onCancelEdit={() => setEditingTask(null)}
        />

        <div className="toolbar">
          <div className="filters" aria-label="Task filters">
            {["all", "active", "completed"].map((filterName) => (
              <button
                key={filterName}
                type="button"
                className={`filter-btn ${
                  filter === filterName ? "active" : ""
                }`}
                onClick={() => setFilter(filterName)}
              >
                {filterName[0].toUpperCase() + filterName.slice(1)}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="clear-btn"
            onClick={clearCompleted}
          >
            Clear completed
          </button>
        </div>

        <TaskList
          tasks={visibleTasks}
          totalTasks={tasks.length}
          onToggle={toggleTask}
          onEdit={setEditingTask}
          onDelete={deleteTask}
        />

        <footer className="app-footer">
          <span>Tasks are stored locally in your browser.</span>
          <button
            type="button"
            className="reset-btn"
            onClick={clearAllTasks}
          >
            Delete all tasks
          </button>
        </footer>
      </section>
    </main>
  );
}

export default App;