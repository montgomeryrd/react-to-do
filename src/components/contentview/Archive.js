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
    <p className="empty-task-list">empty</p>
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
    <p className="empty-task-list">empty</p>
  );
  return (
    <div className="archive-content-view">
      <h2>Archive</h2>
      <div className="archived-scrolls">
        <h4>completed tasks:</h4>
        {archivedTasksList}
      </div>
      <div className="archived-books">
        <h4>completed goals:</h4>
        {archivedGoalsList}
      </div>
    </div>
  )
}
export default Archive;