/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import "../../styles/tasks.css";

const TasksPage = ({value, tasks, handleChangeForms, handleTasksSubmit, removeTaskItem, completedTaskItem, archiveTaskItems}) => {
  const [formOpen, setFormOpen] = useState(false);
  const toggle = () => setFormOpen(!formOpen);

  const mytasks = tasks.length ? (
    tasks.map((task, position) => {
      return (
        <div className="task-item" key={task.id = position}>
          <div className="check" style={{visibility : task.status ? "hidden" : "visible"}}></div><span className="span-item" style={{opacity : task.status ? 1 : .3}} onClick={() => {completedTaskItem(task.id)}}>{task.content}</span>
            <button className="remove-button" onClick={() => {removeTaskItem(task.id)}}>remove</button>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">empty</p>
  );
  return (
    <div className="task-page-view">
      <h4 className="title">Tasks Page</h4>
      { formOpen ? (
        <form id="task-form" onSubmit={handleTasksSubmit}>
          <span className="span-toggle" onClick={toggle}>show/<span className="strong">hide</span></span>
          <br></br>
          <label>input a task:</label>
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
      ) : (
        <span className="span-toggle" onClick={toggle}><span className="strong">show</span>/hide</span>
      )}
      <div className="task-contents">
        {mytasks}
        <button className="clear-button" onClick={() => {archiveTaskItems()}}>clear completed tasks</button>
      </div>
    </div>
  );
}

export default TasksPage;