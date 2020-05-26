/* eslint-disable react/prop-types */
import React from 'react';

const GoalCard = (props) => {
    // const [formOpen, setFormOpen] = useState(false);
    // const toggle = () => setFormOpen(!formOpen);

//   const mytasks = props.tasks.length ? (
//     props.tasks.map((task, position) => {
//       return (
//         <div className="task-item" key={task.id = position}>
//           <div className="blue-line">
//             {/* <div className="complete-span-item" style={{visibility : task.status ? "hidden" : "visible"}}></div> */}
//             <span className="span-item" style={{opacity : task.status ? 1 : .3}} onClick={() => {props.completedTaskItem(task.id)}}>{task.content}</span>
//             <span className="remove-button" onClick={() => {props.removeTaskItem(task.id)}}>undo</span>
//           </div>
//         </div>
//       )
//     })
//   ) : (
//     <p className="empty-task-list">empty</p>
//   );


    return (
        <div className="goal-card">
            <span className="append-steps">append steps</span>
        </div>
    )
}
export default GoalCard;