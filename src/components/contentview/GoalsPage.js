/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import "../../styles/goals.css";

const GoalsPage = ({value, goals, handleChangeForms, handleGoalsSubmit, removeGoalItem, archiveGoalItem}) => {
  // const toggleSteps = () => {
  //   const x = document.getElementById("show-steps");
  //   x.style.visibility === "hidden" ?
  //     x.style.visibility = "visible"
  //   :
  //     x.style.visibility = "hidden";
  // }
  // const toggleForm = () => {
  //   const x = document.getElementById("show-steps-form");
  //   x.style.visibility === "hidden" ?
  //   x.style.visibility = "visible"
  // :
  //   x.style.visibility = "hidden";
  // }
  // const mysteps = goalsteps.length ? (
  //   goalsteps.map((step, position) => {
  //     return (
  //       <li className="step-item" key={step.id = position}>
  //         <li>{step.content}</li>
  //         <button className="button-complete" onClick={() => {completeStep(step.id)}}>complete</button>
  //         <button className="button-remove" onClick={() => {removeStep(step.id)}}>delete</button>
  //       </li>
  //     )
  //   })
  // ) : (
  //   <div></div>
  // );

  const mygoals = goals.length ? (
    goals.map((goal, position) => {
      return (
        <div className="goal-item" key={goal.id = position}>
          <div>
            <span>{goal.content}</span>
            {/* <span onClick={toggleForm}>add steps</span> */}
            {/* <div id="show-steps">
              {mysteps}
            </div> */}
            <button className="archive-goal" onClick={() => {archiveGoalItem(goal.id)}}>goal completed</button>
            <button className="button" onClick={() => {removeGoalItem(goal.id)}}>delete</button>
          </div>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">empty</p>
  );
  
  return (
    <div className="goal-page-view">
      <form onSubmit={handleGoalsSubmit}>
        <label>input a goal:</label>
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
        <button id="form-button" type="submit" onSubmit={handleGoalsSubmit}>
          submit
        </button>
      </form>
      <h4>Goals Page</h4>
      {mygoals}
    </div>
  );
}
export default GoalsPage;