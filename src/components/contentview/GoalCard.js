/* eslint-disable react/prop-types */
import React from 'react';

const GoalCard = (props) => {
    return (
        <div className="goal-card">
            <h5>{props.data.info}</h5>
        </div>
    )
}
export default GoalCard;