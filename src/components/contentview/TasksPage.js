/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import "../../styles/tasks.css";

// I should break this into at least two different
const TasksPage = (props) => {
  const [taskFormOpen, setTaskFormOpen] = useState(false);
  const toggle = () => setTaskFormOpen(!taskFormOpen);

  const [tomorrowOpen, setTomorrowOpen] = useState(false);
  const toggleDay = () => setTomorrowOpen(!tomorrowOpen);

  const mytasks = props.tasks.length ? (
    props.tasks.map((task, position) => {
      return (
        <div className="task-item" key={task.id = position}>
          <div className="blue-line">
            {/* <div className="complete-span-item" style={{visibility : task.status ? "hidden" : "visible"}}></div> */}
            <span className="span-item" style={{opacity : task.status ? 1 : .3}} onClick={() => {props.completedTaskItem(task.id)}}>{task.content}</span>
            <span className="remove-button" onClick={() => {props.removeTaskItem(task.id)}}>undo</span>
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
          <div className="blue-line">
            <span className="span-item">{task.content}</span>
            <span className="remove-button" onClick={() => {props.removeTomorrowItem(task.id)}}>delete</span>
          </div>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">empty</p>
  );

  return (
    <div className="task-page-view">
      <div className="todays-page" style={{display : tomorrowOpen ? "none" : "block"}}>
        <h4 className="title">Today's Tasks</h4>
        <span className="toggle-tasks">click <span className="strong" onClick={toggleDay}>here</span> to plan for tomorrow</span>
        { taskFormOpen ? (
          <form id="task-form" onSubmit={props.handleTasksSubmit}>
            <span className="span-toggle" onClick={toggle}><span className="strong">add task</span>/hide</span>
            <br></br>
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
            <div className="line"></div>
            <button id="form-button" type="submit" onSubmit={props.handleTasksSubmit}>
              submit
            </button>
          </form>
        ) : (
          <span className="span-toggle" onClick={toggle}>add task/<span className="strong">hide</span></span>
        )}
        <div className="task-contents" style={{marginTop : taskFormOpen ? 20 + "px" : 35 + "px"}}>
          <div className="task-contents-window" style={{height : taskFormOpen ?  215 + "px" : 255 + "px"}}>
            <div className="item-view">
              <span className="instruction" style={{visibility : mytasks.length ? "visible" : "hidden"}}>click task to complete</span>
              {mytasks}
            </div>
          </div>
        </div>
        <span className="clear-button" onClick={() => {props.archiveTaskItems()}}>clear completed tasks</span>
      </div>

      <div className="tomorrows-page" style={{display : tomorrowOpen ? "block" : "none"}}>
        <h4 className="title">Tomorrow's Tasks</h4>
        <span className="toggle-tasks">click <span className="strong" onClick={toggleDay}>here</span> to go back to today</span>
        { taskFormOpen ? (
          <form id="task-form" onSubmit={props.handleTomorrowSubmit}>
            <span className="span-toggle" onClick={toggle}><span className="strong">add task</span>/hide</span>
            <br></br>
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
            <div className="line"></div>
            <button id="form-button" type="submit" onSubmit={props.handleTomorrowSubmit}>
              submit
            </button>
          </form>
        ) : (
          <span className="span-toggle" onClick={toggle}>add task/<span className="strong">hide</span></span>
        )}
        <div className="task-contents" style={{marginTop : taskFormOpen ? 20 + "px" : 35 + "px"}}>
          <div className="task-contents-window" style={{height : taskFormOpen ?  215 + "px" : 255 + "px"}}>
            <div className="item-view">
            <span className="instruction" style={{visibility : mytomorrow.length ? "visible" : "hidden"}}>refreshes at midnight</span>
              {mytomorrow}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksPage;