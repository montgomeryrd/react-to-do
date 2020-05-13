import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationLinks from './NavigationLinks';
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
            archivedTasks : [],
            archivedGoals : [],
            showing : "placeholder",
            points : 0,
            taskpoints : 5,
            goalStepPoints : 50,
            goalpoints : 1000,
            taskCount: 0,
            goalCount: 0,
            user: "",
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange (e) {
        this.setState({value : e.target.value});
    }
    handleSubmit (e) {
        e.preventDefault();
        this.addItem(this.state);
        this.setState({value : ""});
    }
    toggle = (page) => {
        this.setState({showing : page});
    }
    addItem = (item) => {
        if(this.state.showing === "tasks-page") {
            item.id = Math.random() * 1000;
            item.content = this.state.value;
            this.setState({tasks : [...this.state.tasks, item]});
            this.setState({taskCount : this.state.taskCount + 1});
        } else if(this.state.showing === "goals-page") {
            item.id = Math.random() * 1000;
            item.content = this.state.value;
            this.setState({goals : [...this.state.goals, item]});
            this.setState({goalCount : this.state.goalCount + 1});
        }
    }
    removeItem = (id) => {
        if(this.state.showing === "tasks-page") {
            this.setState({tasks : this.state.tasks.filter(task => {return task.id !== id})});
            this.setState({taskCount : this.state.taskCount - 1});
        } else if(this.state.showing === "goals-page") {
            this.setState({goals : this.state.goals.filter(goal => {return goal.id !== id})});
            this.setState({goalCount : this.state.goalCount - 1});
        }
    }
    archiveItem = (id) => {
        if(this.state.showing === "tasks-page") {
            const scroll = this.state.tasks.filter(task => {return task.id === id});
            this.setState({archivedTasks : scroll.concat([...this.state.archivedTasks])});
            this.setState({points : this.state.points + 5});
            this.removeItem(id);
        } else if(this.state.showing === "goals-page") {
            const book = this.state.goals.filter(goal => {return goal.id === id});
            this.setState({archivedGoals : book.concat([...this.state.archivedGoals])});
            this.setState({points : this.state.points + 1000});
            this.removeItem(id);
        }
    }
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
                    <div className="hamburger">
                        <div className="hamburger-lines"></div>
                        <div className="hamburger-lines"></div>
                        <div className="hamburger-lines"></div>
                    </div>
                    <h2>{currentDate}</h2>
                    <h3>{currentDay}</h3>
                    <h1>Dashboard</h1>
                    <button onClick={() => {this.checkState()}}>check</button>
                    <h2>Tasks {this.state.taskCount}</h2>
                    <h2>Goals {this.state.goalCount}</h2>
                    <div className="navigation-container">
                        <Router>
                            <NavLink to="/tasks"><NavigationLinks toggle={this.toggle} data = {{page: "tasks-page", bgcolor: red, imgUrl: TaskPath}} /></NavLink>
                            <NavLink to="/goals"><NavigationLinks toggle={this.toggle} data = {{page: "goals-page", bgcolor: blue, imgUrl: GoalPath}} /></NavLink>
                            <NavLink to="/archive"><NavigationLinks toggle={this.toggle} data = {{page: "archive-page", bgcolor: yellow, imgUrl: ArchivePath}} /></NavLink>
                            <Route path="/tasks" render={props => 
                            (<TasksPage {...props} value={this.state.value} tasks={this.state.tasks} handleChange={this.handleChange} handleSubmit={this.handleSubmit} removeItem={this.removeItem} archiveItem={this.archiveItem}/>)} />
                            <Route path="/goals" render={props =>
                            (<GoalsPage {...props} value={this.state.value} goals={this.state.goals} handleChange={this.handleChange} handleSubmit={this.handleSubmit} removeItem={this.removeItem} archiveItem={this.archiveItem}/>)} />
                            <Route path="/archive" render={props =>
                            (<Archive {...props} archivedTasks={this.state.archivedTasks} archivedGoals={this.state.archivedGoals} />)} />
                        </Router>
                    </div>
                </div>
                <h3>total points: {this.state.points}</h3>
            </div>
        );
    }
}
Dashboard.propTypes = {
    tasks: PropTypes.instanceOf(Array),
    goals: PropTypes.instanceOf(Array),
    archivedTasks: PropTypes.instanceOf(Array),
    archivedGoals: PropTypes.instanceOf(Array),
    value: PropTypes.instanceOf(String),
    showing: PropTypes.instanceOf(String),
    points: PropTypes.instanceOf(Number),
    taskpoints: PropTypes.instanceOf(Number),
    goalStepPoints: PropTypes.instanceOf(Number),
    goalpoints: PropTypes.instanceOf(Number),
    taskCount: PropTypes.instanceOf(Number),
    goalCount: PropTypes.instanceOf(Number),
    user: PropTypes.instanceOf(String),
};
export default Dashboard;