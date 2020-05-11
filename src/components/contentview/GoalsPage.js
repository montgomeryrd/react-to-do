/* eslint-disable react/prop-types */
import React from 'react';
import Form from './Form';

const GoalsPage = ({value, goals, handleChange, handleSubmit, removeItem}) => {
  const mygoals = goals.length ? (
    goals.map(goal => {
      return (
        <div className="goal-item" key={goal.id}>
          <span onClick={() => {removeItem(goal.id)}}>{goal.content}</span>
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