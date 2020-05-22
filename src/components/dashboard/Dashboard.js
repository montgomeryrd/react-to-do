import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Modal from './Modal';
import Settings from './Settings';
import TasksPage from '../contentview/TasksPage';
// import TomorrowsTasksPage from '../contentview/TomorrowsTasksPage';
import GoalsPage from '../contentview/GoalsPage';
import Archive from '../contentview/Archive';

import '../../styles/dashboard.css';
import "../../styles/tasks.css";

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        const userInformation = JSON.parse(localStorage.getItem('userInformation'));
        userInformation ? this.state = (userInformation) : 
        this.state = this.initialState;
        this.handleChangeForms=this.handleChangeForms.bind(this);
        this.handleModalSubmit=this.handleModalSubmit.bind(this);
        this.handleTasksSubmit=this.handleTasksSubmit.bind(this);
        this.handleTomorrowSubmit=this.handleTomorrowSubmit.bind(this);
        this.handleGoalsSubmit=this.handleGoalsSubmit.bind(this);
    };
    get initialState(){
        return {
            user : "riker",
            value : "",
            array : [],
            tasks : [],
            goals : [],
            tomorrowsTasks : [],
            archivedTasks : [],
            archivedGoals : [],
            taskCount : 0,
            totalTasks : 0,
            goalCount : 0,
            totalGoals : 0,
            points : 0
        };
    }

    // Form handlers ---------------------------------------------------------------
    handleChangeForms (e) {
        this.setState({value : e.target.value});
    }
    handleModalSubmit (e) {
        e.preventDefault();
        this.setState({user : this.state.value});
        this.setState({value : ""});
    }
    handleTasksSubmit (e) {
        e.preventDefault();
        this.addTaskItem(this.state);
        this.setState({value : ""});
    }
    handleTomorrowSubmit (e) {
        e.preventDefault();
        this.addTomorrowItem(this.state);
        this.setState({value : ""});
    }
    handleGoalsSubmit (e) {
        e.preventDefault();
        this.addGoalItem(this.state);
        this.setState({value : ""});
    }

    // User Functions --------------------------------------------------------------
    saveUserInformation = () => {
        localStorage.clear();
        const userInformation = Object.assign({}, this.state);
        localStorage.setItem('userInformation', JSON.stringify(userInformation));
    }
    deleteUser = () => {
        this.setState(this.initialState);
        localStorage.clear();
    }

    // Task Page Functions ---------------------------------------------------------
    addTaskItem = (task) => {
        task.id = Math.random() * 1000;
        task.content = this.state.value;
        task.status = true;
        this.setState({tasks : [...this.state.tasks, task]});
        this.setState({taskCount : this.state.taskCount + 1});
    }
    completedTaskItem = (id) => {
        const completedTask = this.state.tasks.filter(task => task.id === id);    
        if(completedTask[0].status === true) {
            this.setState({array : completedTask.concat([...this.state.array])});
            completedTask.map(task => task.status = false);
        } else {
            this.setState({array : this.state.array.filter(task => task.id !== id)})
            completedTask.map(task => task.status = true);
        }
    }
    removeTaskItem = (id) => {
        if(this.state.array.filter(task => task.id === id).length) {
            this.setState({array : this.state.array.filter(task => task.id !== id)})
        }
        this.setState({tasks : this.state.tasks.filter(task => task.id !== id)});
        this.setState({taskCount : this.state.taskCount - 1});
    }
    removeTasksFromTasksList = () => {
        this.setState({tasks : this.state.tasks.filter(task => task.status !== false)});
        const array = [];
        this.setState({taskCount : this.state.taskCount - this.state.array.length});
        this.setState({array : array});
    }
    archiveTaskItems = (id) => {
        this.setState({points : this.state.points + (5 * this.state.array.length)});
        this.setState({totalTasks : this.state.totalTasks + this.state.array.length});
        this.setState({archivedTasks : ([...this.state.array].concat([...this.state.archivedTasks])).filter((_,i) => i < 6)});    
        this.removeTasksFromTasksList(this.state);
    }

    // Tomorrow Task Page Functions ------------------------------------------------
    addTomorrowItem = (task) => {
        task.id = Math.random() * 1000;
        task.content = this.state.value;
        this.setState({tomorrowsTasks : [...this.state.tomorrowsTasks, task]});
    }
    removeTomorrowItem = (id) => {
        this.setState({tomorrowsTasks : this.state.tomorrowsTasks.filter(task => task.id !== id)});
    }
    transferTasks = () => {
        this.setState({tasks : [...this.state.tasks].concat(this.state.tomorrowsTasks)});
        this.setState({tomorrowsTasks : []});
    }
    // Goal Page Functions ---------------------------------------------------------
    addGoalItem = (goal) => {
        goal.id = Math.random() * 1000;
        goal.expandSteps = {};
        goal.steps = [];
        goal.content = this.state.value;
        this.setState({goals : [...this.state.goals, goal]});
        this.setState({goalCount : this.state.goalCount + 1});
    }
    removeGoalItem = (id) => {
        this.setState({goals : this.state.goals.filter(goal => goal.id !== id)});
        this.setState({goalCount : this.state.goalCount - 1});
    }
    archiveGoalItem = (id) => {
        this.setState({points : this.state.points + 1000});
        this.setState({totalGoals : this.state.totalGoals + 1});
        const book = this.state.goals.filter(goal => goal.id === id);
        this.setState({archivedGoals : book.concat([...this.state.archivedGoals]).filter((_,i) => i < 100)});
        this.removeGoalItem(id);
    }

    // Goal Step Functions ---------------------------------------------------------
    showExpandedSteps = (id) => {
        this.setState(prevState => ({
            expandSteps: {
                ...prevState.expandSteps,
                [id]: !prevState.expandSteps[id]
            }
        }));
    };
    // Check State Function
    checkState = () => {console.log(this.state)};
    
    render() {
        const currentDate = new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
        const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
        const red = {backgroundColor : '#E91E63'};
        const blue = {backgroundColor : '#2196F3'};
        const yellow = {backgroundColor : '#FFCA28'}; 

        return (
            <div className="container">
                <div className="dashboard-container">
                    { this.state.user === "" ?
                        <div className="modal-container">
                            <div className="modal">
                                <Modal
                                    value={this.state.value}
                                    handleChangeForms={this.handleChangeForms}
                                    handleModalSubmit={this.handleModalSubmit} 
                                />
                            </div>
                        </div>
                    :
                        null
                    }
                    <div className="dashboard-content-view">
                        <Settings 
                            user={this.state.user}
                            totalTasks={this.state.totalTasks} 
                            totalGoals={this.state.totalGoals} 
                            points={this.state.points}
                            deleteUser={this.deleteUser}
                        />
                        <h6>{this.state.user}</h6>
                        <h2>{currentDate}</h2>
                        <h3>{currentDay}</h3>
                        <h1>Dashboard</h1>

                        <div className="navigation-container">
                            <Router>
                                <div className="nav">
                                    <NavLink to="/tasks" style={{ textDecoration: 'none' }}>
                                        <NavigationLinks 
                                            data = {{id: "tasks-bar", bgcolor: red, page:"Tasks:", count: this.state.taskCount}} 
                                        />
                                    </NavLink>
                                    <NavLink to="/goals" style={{ textDecoration: 'none' }}>
                                        <NavigationLinks 
                                            data = {{id: "goals-bar", bgcolor: blue, page: "Goals:", count: this.state.goalCount}} 
                                        />
                                    </NavLink>
                                    <NavLink to="/archive" style={{ textDecoration: 'none' }}>
                                        <NavigationLinks  
                                            data = {{id:"achievements-bar", bgcolor: yellow, page: "Achievements", count: ""}} 
                                        />
                                    </NavLink>
                                </div>
                                <div className="links">
                                    <Route path="/tasks" render={props => 
                                        (<TasksPage 
                                            value={this.state.value} 
                                            tasks={this.state.tasks} 
                                            tomorrowsTasks={this.state.tomorrowsTasks}
                                            toggleTomorrowsTasksPageTrue={this.toggleTomorrowsTasksPageTrue}
                                            handleChangeForms={this.handleChangeForms} 
                                            handleTasksSubmit={this.handleTasksSubmit} 
                                            handleTomorrowSubmit={this.handleTomorrowSubmit}
                                            completedTaskItem={this.completedTaskItem}
                                            removeTaskItem={this.removeTaskItem} 
                                            archiveTaskItems={this.archiveTaskItems}
                                            removeTomorrowItem={this.removeTomorrowItem}
                                        />)
                                    }/>
                                    <Route path="/goals" render={props =>
                                        (<GoalsPage 
                                            value={this.state.value} 
                                            goals={this.state.goals} 
                                            toggleTomorrowsTasksPageFalse={this.toggleTomorrowsTasksPageFalse}
                                            showExpandedSteps={this.showExpandedSteps}
                                            handleChangeForms={this.handleChangeForms} 
                                            handleGoalsSubmit={this.handleGoalsSubmit} 
                                            removeGoalItem={this.removeGoalItem} 
                                            archiveGoalItem={this.archiveGoalItem}
                                        />)
                                    }/>
                                    <Route path="/archive" render={props =>
                                        (<Archive 
                                            toggleTomorrowsTasksPageFalse={this.toggleTomorrowsTasksPageFalse}
                                            handleChangeForms={this.handleChangeForms}
                                            handleModalSubmit={this.handleModalSubmit}
                                            archivedTasks={this.state.archivedTasks} 
                                            archivedGoals={this.state.archivedGoals}
                                        />)
                                    }/>
                                </div>
                            </Router>
                        </div>
                    </div>
                    {/* <button id="save-button" onClick={this.saveUserInformation}>Save</button> */}
                    <h3 id="points">total points: {this.state.points}</h3>
                    {/* <button onClick={this.checkState}>this.state</button> */}
                </div>
            </div>
        );
    }
}

function NavigationLinks(props) {
    return (
        <div id={props.data.id} className="navigation-link" style={props.data.bgcolor}>
            <h2>{props.data.page} {props.data.count}</h2>
        </div>
    )
}

// Dashboard.propTypes = {
//     value: PropTypes.instanceOf(String),
//     tasks: PropTypes.instanceOf(Array),
//     goals: PropTypes.instanceOf(Array),
//     steps: PropTypes.instanceOf(Array),
//     goalContainer: PropTypes.instanceOf(Array),
//     archivedTasks: PropTypes.instanceOf(Array),
//     archivedGoals: PropTypes.instanceOf(Array),
//     points: PropTypes.instanceOf(Number),
//     taskpoints: PropTypes.instanceOf(Number),
//     goalStepPoints: PropTypes.instanceOf(Number),
//     goalpoints: PropTypes.instanceOf(Number),
//     taskCount: PropTypes.instanceOf(Number),
//     goalCount: PropTypes.instanceOf(Number),
//     user: PropTypes.instanceOf(String),
// };
export default Dashboard;