import React from 'react';
import GoalCard from './GoalCard';
import '../../styles/goals.css';

class GoalsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mygoals : []
    }
  }
  removeGoal = (id) => {
    const mygoals = this.state.mygoals.filter(goal => {
      return goal.id !== id;
    });
    this.setState({ mygoals })
  }
  
  render() {
    return (
      <div className="goals-content-view">
        <GoalCard mygoals={ this.state.mygoals } removeGoal={ this.removeGoal }/>
      </div>
    ); 
    }
}

export default GoalsPage;