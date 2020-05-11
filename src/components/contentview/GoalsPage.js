/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Form from './Form';
import "../../styles/goals.css";

const GoalsPage = ({value, goals, handleChange, handleSubmit, removeItem, archiveItem}) => {
  const mygoals = goals.length ? (
    goals.map(goal => {
      return (
        <div className="card">
          <div className="goal-item" key={goal.id}>
            <span>{goal.content}
              <button onClick={() => {removeItem(goal.id)}}>delete</button>
              <button onClick={() => {archiveItem(goal.id)}}>archive</button>
            </span>
          </div>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">currently no goals</p>
  )

  return (
    <div className="task-page-view">
      <Form value={value} goals={goals} handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2>Goals</h2>
      {mygoals}
      </div>
  )

}
export default GoalsPage;