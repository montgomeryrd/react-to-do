/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import "../../styles/tasks.css";

const TasksPage = (props) => {
  const [taskFormOpen, setTaskFormOpen] = useState(false);
  const toggle = () => setTaskFormOpen(!taskFormOpen);

  const [tomorrowOpen, setTomorrowOpen] = useState(false);
  const toggleDay = () => setTomorrowOpen(!tomorrowOpen);

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
  
  const mytomorrow = props.tomorrowsTasks.length ? (
    props.tomorrowsTasks.map((task, position) => {
      return (
        <div className="task-item" key={task.id = position}>
          <span className="span-item">{task.content}</span>
          <div className="task-item-button">
            <button className="remove-button" onClick={() => {props.removeTomorrowItem(task.id)}}>remove</button>
          </div>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">empty</p>
  );

  return (
    <div className="task-page-view">
      <div className="page" style={{visibility : tomorrowOpen ? "hidden" : "visible"}}>
        <h4 className="title">Today's Tasks</h4>
        { taskFormOpen ? (
          <form id="task-form" onSubmit={props.handleTomorrowSubmit}>
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
          <span className="toggle-tasks" onClick={toggleDay}>plan tomorrow</span>
        </div>
      </div>

      <div className="page" style={{visibility : tomorrowOpen ? "visible" : "hidden"}}>
        <h4 className="title">Tomorrow's Tasks</h4>
        { taskFormOpen ? (
          <form id="task-form" onSubmit={props.handleTomorrowSubmit}>
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
            <button id="form-button" type="submit" onSubmit={props.handleTomorrowSubmit}>
              submit
            </button>
          </form>
        ) : (
          <span className="span-toggle" onClick={toggle}>show/<span className="strong">hide</span></span>
        )}
        <div className="task-contents">
          {mytomorrow}
          <span className="toggle-tasks" onClick={toggleDay}>back to today</span>
        </div>
      </div>
    </div>
  );
}

export default TasksPage;