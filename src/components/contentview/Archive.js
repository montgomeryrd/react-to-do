/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Archive = ({archivedTasks, archivedGoals, checkState}) => {
  const archivedTasksList = archivedTasks.length ? (
    archivedTasks.map((scroll, position) => {
      return (
        <div className="scroll-item" key={scroll.id = position}>
          <span key={scroll.id}>{scroll.value}</span>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">currently no archived tasks</p>
  );
  const archivedGoalsList = archivedGoals.length ? (
    archivedGoals.map((book, position) => {
      return (
        <div className="book-item" key={book.id = position}>
          <span key={book.id}>{book.value}</span>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">currently no archived goals</p>
  );
  return (
    <div className="archive-content-view">
      <h2>Archive</h2>
      <div className="archived-scrolls">
        <button onClick={() => {checkState()}}>check</button>
        {archivedTasksList}
      </div>
      <div className="archived-books">
        {archivedGoalsList}
      </div>
    </div>
  )
}
export default Archive;