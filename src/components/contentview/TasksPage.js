/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import "../../styles/tasks.css";

const TasksPage = (props) => {
  const [taskFormOpen, setTaskFormOpen] = useState(false);
  const toggle = () => setTaskFormOpen(!taskFormOpen);

  const mytasks = props.tasks.length ? (
    props.tasks.map((task, position) => {
      return (
        <div className="task-item" key={task.id = position}>
          <div className="check" style={{visibility : task.status ? "hidden" : "visible"}}></div>
          <span className="span-item" style={{opacity : task.status ? 1 : .3}} onClick={() => {props.completedTaskItem(task.id)}}>{task.content}</span>
          <div className="task-item-button">
            <button className="remove-button" onClick={() => {props.removeTaskItem(task.id)}}>remove</button>
          </div>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">empty</p>
  );
  
  return (
    <div className="task-page-view">
      <h4 className="title">Tasks Page</h4>
      { taskFormOpen ? (
        <form id="task-form" onSubmit={props.handleTasksSubmit}>
          <span className="span-toggle" onClick={toggle}><span className="strong">show</span>/hide</span>
          <br></br>
          <label>input a task:</label>
          <input
            id="form-input"
            type="text"
            name="input"
            value={props.value}
            required={true}
            autoComplete="off"
            onChange={props.handleChangeForms}
            placeholder=""
          />
          <button id="form-button" type="submit" onSubmit={props.handleTasksSubmit}>
            submit
          </button>
        </form>
      ) : (
        <span className="span-toggle" onClick={toggle}>show/<span className="strong">hide</span></span>
      )}
      <div className="task-contents">
        {mytasks}
        <button className="clear-button" onClick={() => {props.archiveTaskItems()}}>clear completed tasks</button>
      </div>
    </div>
  );
}

export default TasksPage;