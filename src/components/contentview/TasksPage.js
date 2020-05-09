/* eslint-disable react/prop-types */
import React from 'react';
// import Form from './Form';

const TaskPage = ({tasks, removeTask}) => {

  const mytasks = tasks.length ? (
    tasks.map(task => {
      return (
        <div className="task-item" key={task.id}>
          <span onClick={() => {removeTask(task.id)}}>{task.content}</span>
        </div>
      )
    })
  ) : (
    <p className="empty-task-list">currently no tasks</p>
  )
  return (
    <div className="task-page-view">
      {/* <Form props={props} value={value} tasks={tasks} handleChange={handleChange} handleSubmit={handleSubmit} addTask={addTask} /> */}
      <h2>Tasks</h2>
      {mytasks}
      </div>
  )

}
export default TaskPage;