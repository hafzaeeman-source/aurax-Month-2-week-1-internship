# AUREX Full-Stack Engineering Internship — Month 2 Week 1

## React Task Manager — Part 1

**Intern:** Hafza Iman  
**Domain:** Full-Stack Web Development  
**Stack:** React.js + Vite  
**Week:** Month 2 — Week 1

## Project Description

This project reconstructs the previous JavaScript Task Management Application as a component-driven React application using Vite.

The application demonstrates React JSX, functional components, props, state with `useState`, event handling, controlled form input, list rendering with `map()`, conditional rendering, parent-child communication, and basic validation.

## Required Week 1 Features

- Add new tasks using a controlled form input
- Display task items dynamically using list mapping
- Toggle task completion status
- Delete tasks from state
- Prevent empty task submission

## Additional Features Carried Forward

The previous JavaScript project also included these features, so they have been retained in the React version:

- Edit tasks
- All / Active / Completed filters
- Clear completed tasks
- Delete all tasks
- Browser `localStorage` persistence
- Minimum 3-character validation
- Responsive interface
- Empty-state messages

## Component Architecture

```text
App
├── Header
├── TaskForm
└── TaskList
    └── TaskItem
```

### App.jsx

`App` is the parent component. It owns the main task state and passes data/functions to child components through props.

### Header.jsx

Displays the application title, description, and current visible task count.

### TaskForm.jsx

Handles the controlled input, validation, form submission, adding tasks, editing tasks, and canceling edit mode.

### TaskList.jsx

Receives the task array through props and uses `.map()` to render a `TaskItem` for every task. It also handles conditional empty-state rendering.

### TaskItem.jsx

Displays one task and provides buttons for completing, editing, and deleting it.

## Data Flow

```text
User enters task
       ↓
TaskForm state
       ↓
onAddTask / onUpdateTask prop
       ↓
App updates tasks state
       ↓
App passes visible tasks to TaskList
       ↓
TaskList maps tasks
       ↓
TaskItem displays each task
```

For completion and deletion:

```text
TaskItem button click
       ↓
Function received through props
       ↓
App updates state
       ↓
React re-renders the affected UI
```

## Technologies

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Browser localStorage
- Git / GitHub

## Folder Structure

```text
aurex-week-1-react-task-manager/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    └── components/
        ├── Header.jsx
        ├── TaskForm.jsx
        ├── TaskList.jsx
        └── TaskItem.jsx
```

## How to Run

### 1. Install Node.js

Make sure Node.js and npm are installed.

Check:

```bash
node -v
npm -v
```

### 2. Open the project

Open the project folder in VS Code.

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will show a local address similar to:

```text
http://localhost:5173/
```

Open that address in your browser.

### 5. Build for production

```bash
npm run build
```

## Testing Checklist

- [ ] Application starts with `npm run dev`
- [ ] Add a valid task
- [ ] Try submitting an empty task
- [ ] Try submitting fewer than 3 characters
- [ ] Display multiple tasks
- [ ] Mark a task complete
- [ ] Mark a completed task active again
- [ ] Delete a task
- [ ] Edit a task
- [ ] Filter All
- [ ] Filter Active
- [ ] Filter Completed
- [ ] Clear completed tasks
- [ ] Delete all tasks
- [ ] Refresh page and confirm saved tasks remain
- [ ] Test desktop layout
- [ ] Test mobile layout

## Learning Outcomes

After completing this task, the main React concepts practiced are:

1. Creating a React project with Vite.
2. Understanding JSX.
3. Creating reusable functional components.
4. Creating a parent-child component hierarchy.
5. Passing data using props.
6. Passing functions through props for child-to-parent communication.
7. Managing UI state with `useState`.
8. Rendering arrays with `.map()`.
9. Using a stable `key` prop for list items.
10. Handling `onClick`, `onChange`, and `onSubmit`.
11. Building controlled form inputs.
12. Performing basic input validation.
13. Understanding how React re-renders UI when state changes.

## Git Commit Suggestions

Use small, meaningful commits:

```text
Initial Vite React project setup
Create React component hierarchy
Implement controlled task form
Add task list and task item components
Add complete and delete functionality
Add validation and filtering
Add localStorage persistence
Complete Week 1 documentation
```

## Submission Checklist

- [ ] GitHub repository contains the React project
- [ ] Repository folder is structured clearly
- [ ] README.md is complete
- [ ] Screenshots are added
- [ ] Live deployment link is added after deployment
- [ ] Project is tested before submission
- [ ] Prepared to explain component hierarchy
- [ ] Prepared to explain state flow and props
- [ ] Prepared to explain controlled form inputs

## Live Deployment

Add your final Vercel, Netlify, or GitHub Pages URL here:

```text
YOUR_LIVE_DEPLOYMENT_LINK
```

## GitHub Repository

Add your React repository URL here:

```text
YOUR_GITHUB_REPOSITORY_LINK
```

## Note

The Week 1 roadmap requires the core React Task Manager features. Extra functionality from the previous JavaScript task has been retained as additional practice and does not replace the required React architecture.
