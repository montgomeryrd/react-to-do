/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Form from './Form';
import "../../styles/goals.css";

const GoalsPage = ({value, goals, goalsteps, completeStep, removeStep, handleChange, handleSubmit, removeItem, archiveItem}) => {
  const toggleSteps = () => {
    const x = document.getElementById("show-steps");
    x.style.visibility === "hidden" ?
      x.style.visibility = "visible"
    :
      x.style.visibility = "hidden";
  }
  const toggleForm = () => {
    const x = document.getElementById("show-steps-form");
    x.style.visibility === "hidden" ?
    x.style.visibility = "visible"
  :
    x.style.visibility = "hidden";
  }
  const mysteps = goalsteps.length ? (
    goalsteps.map((step, position) => {
      return (
        <li className="step-item" key={step.id = position}>
          <li>{step.content}</li>
          <button className="button-complete" onClick={() => {completeStep(step.id)}}>complete</button>
          <button className="button-remove" onClick={() => {removeStep(step.id)}}>delete</button>
        </li>
      )
    })
  ) : (
    <div></div>
  );

  const mygoals = goals.length ? (
    goals.map((goal, position) => {
      return (
        <div className="goal-item" key={goal.id = position}>
          <div>
            <span onClick={toggleSteps}>{goal.content}</span>
            <span onClick={toggleForm}>add steps</span>
            <div id="show-steps-form">
              <Form 
                value={value} 
                goalsteps={goalsteps} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
              />
            </div>
            <div id="show-steps">
              {mysteps}
            </div>
            <button className="archive-goal" onClick={() => {archiveItem(goal.id)}}>complete</button>
            <button className="button" onClick={() => {removeItem(goal.id)}}>delete</button>
          </div>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">currently no goals to pursue</p>
  );
  
  return (
    <div className="goal-page-view">
      <Form 
        value={value} 
        goals={goals} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />
      <h4>Goals:</h4>
      {mygoals}
      </div>
  );
}
export default GoalsPage;