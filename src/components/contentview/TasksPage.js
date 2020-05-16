/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import "../../styles/tasks.css";

const TasksPage = ({value, tasks, handleChangeForms, handleTasksSubmit, removeTaskItem, completedTaskItem, archiveTaskItems}) => {
  const mytasks = tasks.length ? (
    tasks.map((task, position) => {
      return (
        <div className="task-item" key={task.id = position}>
          <span className="span-item" style={{opacity : task.status ? 1 : .3}} onClick={() => {completedTaskItem(task.id)}}>{task.content}</span>
            <button className="remove-button" onClick={() => {removeTaskItem(task.id)}}>delete</button>
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
        <button className="clear-button" onClick={() => {archiveTaskItems()}}>clear completed tasks</button>
      </div>
    </div>
  );
}

export default TasksPage;