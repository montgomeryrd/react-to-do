/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Form from './Form';
import "../../styles/goals.css";

const GoalsPage = ({value, goals, handleChange, handleSubmit, removeItem, archiveItem}) => {
  const mygoals = goals.length ? (
    goals.map((goal, position) => {
      return (
        <div className="goal-item" key={goal.id = position}>
          <span onClick={() => {archiveItem(goal.id)}}>{goal.content}
            <button onClick={() => {removeItem(goal.id)}}>delete</button>
          </span>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">currently no goals</p>
  );
  return (
    <div className="task-page-view">
      <Form value={value} goals={goals} handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2>Goals</h2>
      {mygoals}
      </div>
  );
}
export default GoalsPage;