/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import "../../styles/tasks.css";

const TasksPage = ({value, tasks, handleChangeForms, handleTasksSubmit, removeTaskItem, archiveTaskItem}) => {
  const mytasks = tasks.length ? (
    tasks.map((task, position) => {
      return (
        <div className="task-item" key={task.id = position}>
          <span onClick={() => {archiveTaskItem(task.id)}}>{task.content}</span>
            <button className="button" onClick={() => {removeTaskItem(task.id)}}>delete</button>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">currently no tasks to perform</p>
  );
  return (
    <div className="task-page-view">
      <form id="task-form" onSubmit={handleTasksSubmit}>
        <input
          id="form-input"
          type="text"
          name="input"
          value={value}
          required={true}
          autoComplete="off"
          onChange={handleChangeForms}
          placeholder=""
        />
        <button id="form-button" type="submit" onSubmit={handleTasksSubmit}>
          submit
        </button>
      </form>
      <div className="task-contents">
        <h4>Tasks:</h4>
        {mytasks}
      </div>
    </div>
  );
}
export default TasksPage;