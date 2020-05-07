/* eslint-disable react/prop-types */
import React from 'react';

function Counter(props){
    return (
        <div className="counter">
            <div className="counter-view-tabs">
                <span>tasks</span>
                <span>goals</span>
                <span>archive</span>
            </div>
            <div className="counter-view-totals">
                <span id="task-count">{ props.totals.taskCount }</span>
                <span id="goal-count">{ props.totals.goalCount }</span>
                <span id="archive-count">{ props.totals.archiveCount }</span>
            </div>
        </div>
    ); 
}

export default Counter;