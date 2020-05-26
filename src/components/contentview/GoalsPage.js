/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import GoalCard from './GoalCard';
import "../../styles/goals.css";

const GoalsPage = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const toggle = () => setFormOpen(!formOpen);
  
  const mygoals = props.goals.length ? (
    props.goals.map((goal, position) => {
      return (
        <div className="goal-item" key={goal.id = position}>
          <div className="blue-line">
            <h5 className="goal-card-title" onClick={() => {props.showEditDiv(goal.id)}}>{goal.content}</h5>
          </div>
          <span className="goal-complete-delete">
            <span className="goal-complete" onClick={() => {props.archiveGoalItem(goal.id)}}>goal completed</span>
            <span>/</span>
            <span className="goal-delete" onClick={() => {props.removeGoalItem(goal.id)}}>delete</span>
          </span>
          <div className={`step-items ${!props.editVisibles[goal.id] ? "unvisible" : "visible"}`} key={goal.id}>
            <GoalCard data={{steps : goal.steps}} />
          </div>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">empty</p>
  );

  return (
    <div className="goal-page-view">
      <h4 className="title">My Goals</h4>
      { formOpen ? (
        <form onSubmit={props.handleGoalsSubmit}>
        <span className="span-toggle" onClick={toggle}><span className="strong">add goal</span>/hide</span>
        <span className="title-sub">"A conscious life begins with purpose."</span>
          <input
            id="goal-form-input"
            type="text"
            name="input"
            value={props.value}
            required={true}
            autoComplete="off"
            onChange={props.handleChangeForms}
            placeholder=""
          />
          <div className="goal-line"></div>
          <button id="goal-form-button" type="submit" onSubmit={props.handleGoalsSubmit}>
            submit
          </button>
        </form>
      ) : (
        <div className="form-spacer">
          <span className="span-toggle" onClick={toggle}>add goal/<span className="strong">hide</span></span>
          <span className="title-sub">"A conscious life begins with purpose."</span>
        </div>
      )}
      <div className="goal-contents" style={{marginTop : formOpen ? 20 + "px" : 35 + "px"}}>
        <div className="task-contents-window" style={{height : formOpen ?  215 + "px" : 255 + "px"}}>
          <div className="item-view">
            <span className="instruction" style={{visibility : mygoals.length ? "visible" : "hidden"}}>click goal to add and view steps</span>
            {mygoals}
          </div>
        </div>
      </div>
    </div>
  );
}
export default GoalsPage;