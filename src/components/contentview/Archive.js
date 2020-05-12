/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import "../../styles/archive.css"

const Archive = ({archivedTasks, archivedGoals}) => {
  const archivedTasksList = archivedTasks.length ? (
    archivedTasks.map((scroll, position) => {
      return (
        <div className="scroll-item" key={scroll.id = position}>
          <span>{scroll.content}</span>
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
          <span>{book.content}</span>
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
        {archivedTasksList}
      </div>
      <div className="archived-books">
        {archivedGoalsList}
      </div>
    </div>
  )
}
export default Archive;