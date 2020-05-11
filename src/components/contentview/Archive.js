/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Archive = ({archivedTasks, archivedGoals}) => {
  const tasksarchive = archivedTasks.length ? (
    archivedTasks.scrolls.map(scroll => {
      return (
        <div className="scroll">
          <div className="scroll-item" key={scroll.id}>
            <span>{scroll.content}</span>
          </div>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">currently no archived tasks</p>
  );
  const goalsarchive = archivedGoals.length ? (
    archivedGoals.books.map(book => {
      return (
        <div className="book">
          <div className="book-item" key={book.id}>
            <span>{book.content}</span>
          </div>
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
        {tasksarchive}
      </div>
      <div className="archived-books">
        {goalsarchive}
      </div>
    </div>
  )
}
export default Archive;