import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationLinks from './NavigationLinks';
import Settings from './Settings';
import TasksPage from '../contentview/TasksPage';
import GoalsPage from '../contentview/GoalsPage';
import Archive from '../contentview/Archive';

import TaskPath from '../../icons/navigationIcons/Task.svg';
import GoalPath from '../../icons/navigationIcons/Goal.svg';
import ArchivePath from '../../icons/navigationIcons/Archive.svg';
import '../../styles/dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value : "",
            tasks : [],
            goals : [],
            steps : [],
            goalContainer : [],
            archivedTasks : [],
            archivedGoals : [],
            points : 0,
            taskpoints : 5,
            goalStepPoints : 50,
            goalpoints : 1000,
            taskCount: 0,
            goalCount: 0,
            user: "",
        }
        this.handleChangeForms=this.handleChangeForms.bind(this);
        this.handleTasksSubmit=this.handleTasksSubmit.bind(this);
        this.handleGoalsSubmit=this.handleGoalsSubmit.bind(this);
    }
    // Form functions
    handleChangeForms (e) {
        this.setState({value : e.target.value});
    }
    handleTasksSubmit (e) {
        e.preventDefault();
        this.addTaskItem(this.state);
        this.setState({value : ""});
    }
    handleGoalsSubmit (e) {
        e.preventDefault();
        this.addGoalItem(this.state);
        this.setState({value : ""});
    }
    // Task functions
    addTaskItem = (task) => {
        task.id = Math.random() * 1000;
        task.content = this.state.value;
        this.setState({tasks : [...this.state.tasks, task]});
        this.setState({taskCount : this.state.taskCount + 1});
    }
    removeTaskItem = (id) => {
        this.setState({tasks : this.state.tasks.filter(task => task.id !== id)});
        this.setState({taskCount : this.state.taskCount - 1});
    }
    archiveTaskItem = (id) => {
        const scroll = this.state.tasks.filter(task => task.id === id);
        this.setState({archivedTasks : scroll.concat([...this.state.archivedTasks]).filter((_,i) => i < 6)});
        this.setState({points : this.state.points + 5});
        this.removeTaskItem(id);
    }
    // Goal Functions
    addGoalItem = (goal) => {
        goal.id = Math.random() * 1000;
        goal.content = this.state.value;
        this.setState({goals : [...this.state.goals, goal]});
        this.setState({goalCount : this.state.goalCount + 1});
    }
    removeGoalItem = (id) => {
        this.setState({goals : this.state.goals.filter(goal => goal.id !== id)});
        this.setState({goalCount : this.state.goalCount - 1});
    }
    archiveGoalItem = (id) => {
        const book = this.state.goals.filter(goal => goal.id === id);
        this.setState({archivedGoals : book.concat([...this.state.archivedGoals]).filter((_,i) => i < 100)});
        this.setState({points : this.state.points + 1000});
        this.removeGoalItem(id);
    }
    // Goal Step Functions

    checkState = () => {console.log(this.state)};
    
    render() {
        const currentDate = new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
        const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
        const red = {backgroundColor : '#E91E63'};
        const blue = {backgroundColor : '#2196F3'};
        const yellow = {backgroundColor : '#FFCA28'}; 

        return (
            <div className="container">
                <div className="dashboard-content-view">
                    <Settings />
                    {/* <div className="hamburger">
                        <div className="hamburger-lines"></div>
                        <div className="hamburger-lines"></div>
                        <div className="hamburger-lines"></div>
                    </div> */}
                    <h2>{currentDate}</h2>
                    <h3>{currentDay}</h3>
                    <h1>Dashboard</h1>
                    <div className="counters">
                        <div>Tasks {this.state.taskCount}</div>
                        <div>Goals {this.state.goalCount}</div>
                        <div></div>
                    </div>
                    <div className="navigation-container">
                        <Router>
                            <NavLink to="/tasks">
                                <NavigationLinks 
                                    data = {{bgcolor: red, imgUrl: TaskPath}} 
                                />
                            </NavLink>
                            <NavLink to="/goals">
                                <NavigationLinks 
                                    data = {{bgcolor: blue, imgUrl: GoalPath}} 
                                />
                            </NavLink>
                            <NavLink to="/archive">
                                <NavigationLinks  
                                    data = {{bgcolor: yellow, imgUrl: ArchivePath}} 
                                />
                            </NavLink>
                            <Route path="/tasks" render={props => 
                                (<TasksPage 
                                    {...props} 
                                    value={this.state.value} 
                                    tasks={this.state.tasks} 
                                    handleChangeForms={this.handleChangeForms} 
                                    handleTasksSubmit={this.handleTasksSubmit} 
                                    removeTaskItem={this.removeTaskItem} 
                                    archiveTaskItem={this.archiveTaskItem}
                                />)
                            }/>
                            <Route path="/goals" render={props =>
                                (<GoalsPage 
                                    {...props} 
                                    value={this.state.value} 
                                    goals={this.state.goals} 
                                    handleChangeForms={this.handleChangeForms} 
                                    handleGoalsSubmit={this.handleGoalsSubmit} 
                                    removeGoalItem={this.removeGoalItem} 
                                    archiveGoalItem={this.archiveGoalItem}
                                />)
                            }/>
                            <Route path="/archive" render={props =>
                                (<Archive 
                                    {...props} 
                                    archivedTasks={this.state.archivedTasks} 
                                    archivedGoals={this.state.archivedGoals}
                                />)
                            }/>
                        </Router>
                    </div>
                </div>
                <h3>total points: {this.state.points}</h3>
                <button onClick={() => {this.checkState()}}>this.state</button>
            </div>
        );
    }
}
Dashboard.propTypes = {
    value: PropTypes.instanceOf(String),
    tasks: PropTypes.instanceOf(Array),
    goals: PropTypes.instanceOf(Array),
    steps: PropTypes.instanceOf(Array),
    goalContainer: PropTypes.instanceOf(Array),
    archivedTasks: PropTypes.instanceOf(Array),
    archivedGoals: PropTypes.instanceOf(Array),
    points: PropTypes.instanceOf(Number),
    taskpoints: PropTypes.instanceOf(Number),
    goalStepPoints: PropTypes.instanceOf(Number),
    goalpoints: PropTypes.instanceOf(Number),
    taskCount: PropTypes.instanceOf(Number),
    goalCount: PropTypes.instanceOf(Number),
    user: PropTypes.instanceOf(String),
};
export default Dashboard;