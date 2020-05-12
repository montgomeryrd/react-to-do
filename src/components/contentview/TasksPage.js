/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Form from './Form';
import "../../styles/tasks.css";

const TasksPage = ({value, tasks, handleChange, handleSubmit, removeItem, archiveItem}) => {
  const mytasks = tasks.length ? (
    tasks.map((task, position) => {
      return (
        <div className="task-item" key={task.id = position}>
          <span onClick={() => {archiveItem(task.id)}}>{task.content}
            <button onClick={() => {removeItem(task.id)}}>delete</button>
          </span>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">currently no tasks</p>
  );
  return (
    <div className="task-page-view">
      <Form value={value} tasks={tasks} handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2>Tasks</h2>
      {mytasks}
      </div>
  );
}
export default TasksPage;