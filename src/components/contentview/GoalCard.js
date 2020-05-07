/* eslint-disable react/prop-types */
import React from 'react';

const GoalCard = ({ mygoals, removeGoal }) => {
    const goalList = mygoals.length ? (
        mygoals.map(goal => {
            return (
                <div className="all-my-goals" key={ goal.id }>
                    <span onClick={ () => { removeGoal(goal.id) } }>{ goal.content }</span>
                </div>
            )
        })
    ) : (
        <p className="empty-goal-list">goal status: empty</p>
    )
    return (
        <div className="my-goals">
            { goalList }
        </div>
    )
}
export default GoalCard;