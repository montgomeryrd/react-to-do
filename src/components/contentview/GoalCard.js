/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const GoalCard = (props) => {
    const [formOpen, setFormOpen] = useState(false);
    const toggle = () => setFormOpen(!formOpen);

    return (
        <div className="goal-card">
            {formOpen ? (
                <form className="goal-steps-form" onSubmit={props.handleStepsSubmit}>
                <span className="append-steps" onClick={toggle}>close</span>
                    <input
                        id="goal-steps-input"
                        type="text"
                        value={props.stepsvalue}
                        required={true}
                        autoComplete="off"
                        onChange={props.handleChangeSteps}
                        placeholder="" 
                    />
                    <button 
                        id="append-button" 
                        type="submit" 
                        onSubmit={props.handleStepsSubmit}
                        onClick={() => {props.addStepsToGoal(props.goalID)}}
                    >append</button>
                </form>
            ) : (
                <div>
                    <span className="append-steps" onClick={toggle}>append steps</span>
                </div>
            )}
            <div>
                <p>goal : {props.goal}</p>
                <p>goalID : {props.goalID}</p>
                <p>steps : {props.steps}</p>
            </div>
        </div>
    );
};
export default GoalCard;