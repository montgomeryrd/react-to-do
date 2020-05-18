/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import GoalCard from './GoalCard';
import "../../styles/goals.css";

const GoalsPage = ({value, goals, handleChangeForms, handleGoalsSubmit, removeGoalItem, archiveGoalItem}) => {
  const mygoals = goals.length ? (
    goals.map((goal, position) => {
      return (
        <div className="goal-item" key={goal.id = position}>
          <div>
            <GoalCard data={{info : goal.content}} />
            <button className="archive-goal" onClick={() => {archiveGoalItem(goal.id)}}>goal completed</button>
            <button className="button" onClick={() => {removeGoalItem(goal.id)}}>remove goal without saving</button>
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