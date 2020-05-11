import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationLinks from './NavigationLinks';
import TasksPage from '../contentview/TasksPage';
import GoalsPage from '../contentview/GoalsPage';
import Archive from '../contentview/Archive';

import Settings from '../../icons/creatures/faerie.svg';
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
            archive : [],
            showing : "placeholder",
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange (e) {
        this.setState({value : e.target.value});
    }
    handleSubmit (e) {
        e.preventDefault();
        this.addTask(this.state);
        this.setState({value : ""});
    }
    addTask = (task) => {
        task.id = Math.random() * 100;
        task.content = this.state.value;
        let tasks = [...this.state.tasks, task];
        this.setState({tasks});
    }
    removeTask = (id) => {
        const tasks = this.state.tasks.filter(task => {
            return task.id !== id;
        });
        this.setState({tasks});
    }
    toggle = (page) => {
        const showing = page;
        this.setState({showing});
    }

    render() {
        const currentDate = new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
        const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
        const red = {backgroundColor : '#E91E63'};
        const blue = {backgroundColor : '#2196F3'};
        const yellow = {backgroundColor : '#FFCA28'}; 

        return (
            <div className="container">
                <div className="dashboard-content-view">
                    <img id="user" src={Settings} alt=""></img>
                    <h2>{currentDate}</h2>
                    <h3>{currentDay}</h3>
                    <h1>Dashboard</h1>
                    <div className="navigation-container">
                        <Router>
                            <NavLink to="/tasks"><NavigationLinks toggle={this.toggle} data = {{page: "tasks-page", bgcolor: red, imgUrl: TaskPath}} /></NavLink>
                            <NavLink to="/goals"><NavigationLinks toggle={this.toggle} data = {{page: "goals-page", bgcolor: blue, imgUrl: GoalPath}} /></NavLink>
                            <NavLink to="/archive"><NavigationLinks toggle={this.toggle} data = {{page: "archive-page", bgcolor: yellow, imgUrl: ArchivePath}} /></NavLink>
                            
                            <Route path="/tasks" render={props => 
                            (<TasksPage {...props} value={this.state.value} tasks={this.state.tasks} handleChange={this.handleChange} handleSubmit={this.handleSubmit} removeTask={this.removeTask}/>)} />
                            <Route path="/goals" render={props =>
                            (<GoalsPage {...props} goals={this.state.goals}/>)} />
                            <Route path="/archive" render={props =>
                            (<Archive {...props} archive={this.state.archive}/>)} />
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    tasks: PropTypes.instanceOf(Array),
    goals: PropTypes.instanceOf(Array),
    archive: PropTypes.instanceOf(Array),
    value: PropTypes.instanceOf(String),
    showing: PropTypes.instanceOf(String)
};

export default Dashboard;