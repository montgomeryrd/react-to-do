/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const GoalCard = (props) => {
    const [stepsOpen, setStepsOpen] = useState(false);
    const toggle = () => setStepsOpen(!stepsOpen);

    // const [stepCount, setStepCount] = useState(0);

    // const mygoals = goals.length ? (
    //     goals.map((goal, position) => {
    //       return (
    //         <div className="goal-item" key={goal.id = position}>
    //           <div>
    //             <GoalCard data={{info : goal.content}} />
    //             <button className="archive-goal" onClick={() => {archiveGoalItem(goal.id)}}>goal completed</button>
    //             <button className="button" onClick={() => {removeGoalItem(goal.id)}}>remove goal without saving</button>
    //           </div>
    //         </div>
    //       )
    //     })
    //   ) : (
    //     <p className="empty-task-list">empty</p>
    //   );
    
    return (
        <div className="goal-card">
            { stepsOpen ? (
                <div className="goal-card-info">
                    <h5>{props.data.info}</h5>
                    <span onClick={toggle}>close form</span>
                    {/* <form onSubmit={handleStepsSubmit}>
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
                    </form> */}
                    <p>show steps here</p>
                </div>
            ) : (
                <div className="goal-card-info">
                    <h5>{props.data.info}</h5>
                    <span onClick={toggle}>add steps</span>
                    <p>show steps here</p>
                </div>
            )}
        </div>
    )
}
export default GoalCard;