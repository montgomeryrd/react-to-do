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
          <div>
            <GoalCard data={{info : goal.content}} />
            <button className="archive-goal" onClick={() => {props.archiveGoalItem(goal.id)}}>goal completed</button>
            <button className="button" onClick={() => {props.removeGoalItem(goal.id)}}>remove goal without saving</button>
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
        <span className="toggle-tasks">"A conscious life begins with purpose."</span>
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
        <div>
          <span className="span-toggle" onClick={toggle}>add goal/<span className="strong">hide</span></span>
          <span className="toggle-tasks">"A conscious life begins with purpose."</span>
        </div>
      )}
      <div className="goal-contents">
        {mygoals}
      </div>
    </div>
  );
}
export default GoalsPage;