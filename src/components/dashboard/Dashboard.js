import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Modal from './Modal';
import Settings from './Settings';
import TasksPage from '../contentview/TasksPage';
import GoalsPage from '../contentview/GoalsPage';
import Archive from '../contentview/Archive';

import '../../styles/dashboard.css';
import "../../styles/tasks.css";

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user : "riker",
            value : "",
            stepsvalue : "",
            array : [],
            tasks : [],
            goals : [],
            steps : [],
            tomorrowsTasks : [],
            // isTomorrow : true,
            archivedTasks : [],
            archivedGoals : [],
            taskCount : 0,
            totalTasks : 0,
            goalCount : 0,
            totalGoals : 0,
            points : 0,
            editVisibles : {},
        }
        this.handleChangeSteps=this.handleChangeSteps.bind(this);
        this.handleChangeForms=this.handleChangeForms.bind(this);
        this.handleModalSubmit=this.handleModalSubmit.bind(this);
        this.handleTasksSubmit=this.handleTasksSubmit.bind(this);
        this.handleTomorrowSubmit=this.handleTomorrowSubmit.bind(this);
        this.handleGoalsSubmit=this.handleGoalsSubmit.bind(this);
        this.handleStepsSubmit=this.handleStepsSubmit.bind(this);
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('userInformation');
            this.setState({...JSON.parse(json)});
        } catch (error) {};
    }
    componentDidUpdate(prevProps, prevState) {  
        const json = JSON.stringify(this.state);
        localStorage.setItem('userInformation', json);
    }

    // Form handlers ---------------------------------------------------------------
    handleChangeForms (e) {
        this.setState({value : e.target.value});
    }
    handleChangeSteps (e) {
        this.setState({stepsvalue : e.target.value})
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
    handleStepsSubmit (e) {
        e.preventDefault();
        this.appendStep(this.state);
        this.setState({stepsvalue : ""});
    }

    // User Functions --------------------------------------------------------------
    deleteUser = () => {
        localStorage.clear();
        window.location.reload();
    }

    // Task Page Functions ---------------------------------------------------------
    addTaskItem = (task) => {
        task.id = Math.random() * 1000;
        task.content = this.state.value;
        task.status = true;
        this.setState({tasks : [...this.state.tasks, task]});

        const taskCount = this.state.taskCount + 1;
        this.setState({taskCount : taskCount});
    }
    completedTaskItem = (id) => {
        const completedTask = this.state.tasks.filter(task => task.id === id);    
        if(completedTask[0].status === true) {
            completedTask.map(task => task.status = false);
            const array = completedTask.concat([...this.state.array]);
            this.setState({array : array});
        } else {
            completedTask.map(task => task.status = true);
            const array = this.state.array.filter(task => task.id !== id);
            this.setState({array : array});
        }
    }
    removeTaskItem = (id) => {
        if(this.state.array.filter(task => task.id === id).length) {
            const array = this.state.array.filter(task => task.id !== id);
            this.setState({array : array});
        }
        const tasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({tasks : tasks});

        const taskCount = this.state.taskCount - 1;
        this.setState({taskCount : taskCount});
    }
    removeTasksFromTasksList = () => {
        const tasks = this.state.tasks.filter(task => task.status !== false);
        this.setState({tasks : tasks});

        const taskCount = this.state.taskCount - this.state.array.length;
        this.setState({taskCount : taskCount});

        const array = [];
        this.setState({array : array});
    }
    archiveTaskItems = (id) => {
        const points = this.state.points + (5 * this.state.array.length);
        this.setState({points : points});

        const totalTasks = this.state.totalTasks + this.state.array.length;
        this.setState({totalTasks : totalTasks});

        const archivedTasks = ([...this.state.array].concat([...this.state.archivedTasks])).filter((_,i) => i < 6);
        this.setState({archivedTasks : archivedTasks});    

        this.removeTasksFromTasksList(this.state);
    }

    // Tomorrow Task Page Functions ------------------------------------------------
    addTomorrowItem = (task) => {
        task.id = Math.random() * 1000;
        task.content = this.state.value;
        const tomorrowsTasks = [...this.state.tomorrowsTasks, task];
        this.setState({tomorrowsTasks : tomorrowsTasks});
    }
    removeTomorrowItem = (id) => {
        const tomorrowsTasks = this.state.tomorrowsTasks.filter(task => task.id !== id);
        this.setState({tomorrowsTasks : tomorrowsTasks});
    }
    // refreshAt(hours, minutes, seconds) {
    //     var now = new Date();
    //     var then = new Date();
    
    //     if(now.getHours() > hours ||
    //        (now.getHours() === hours && now.getMinutes() > minutes) ||
    //         now.getHours() === hours && now.getMinutes() === minutes && now.getSeconds() >= seconds) {
    //         then.setDate(now.getDate() + 1);
    //     }
    //     then.setHours(hours);
    //     then.setMinutes(minutes);
    //     then.setSeconds(seconds);
    
    //     var timeout = (then.getTime() - now.getTime());
    //     setTimeout(function() {
    //         this.setState({tasks : [...this.state.tasks].concat(this.state.tomorrowsTasks)});
    //         this.setState({tomorrowsTasks : []});
    //         window.location.reload(true); 
    //     }, timeout);
    // }
    // Goal Page Functions ---------------------------------------------------------
    addGoalItem = (goal) => {
        goal.id = Math.random() * 1000;
        goal.steps = [];
        goal.content = this.state.value;
        this.setState({goals : [...this.state.goals, goal]});

        const goalCount = this.state.goalCount + 1;
        this.setState({goalCount : goalCount});
    }
    removeGoalItem = (id) => {
        const goals = this.state.goals.filter(goal => goal.id !== id);
        this.setState({goals : goals});

        const goalCount = this.state.goalCount - 1;
        this.setState({goalCount : goalCount});
    }
    archiveGoalItem = (id) => {
        const points = this.state.points + 1000;
        this.setState({points : points});

        const totalGoals = this.state.totalGoals + 1;
        this.setState({totalGoals : totalGoals});

        const book = this.state.goals.filter(goal => goal.id === id);
        const archivedGoals = book.concat([...this.state.archivedGoals]).filter((_,i) => i < 100);
        this.setState({archivedGoals : archivedGoals});

        this.removeGoalItem(id);
    }

    // Goal Step Functions ---------------------------------------------------------
    showEditDiv = (id) => {
        this.setState(prevState => ({editVisibles: {...prevState.editVisibles, [id]: !prevState.editVisibles[id]}}));
    };
    appendStep = (step) => {
        step.content = this.state.stepsvalue;
        this.setState({steps : [...this.state.steps, step]});
    }
    addStepsToGoal = (id) => {
        const goal = this.state.goals.filter(goal => goal.id === id);
        goal.steps = this.state.steps;
        const index = this.state.goals.findIndex(goal => goal.id === id);
        const goals = this.state.goals.splice(index, 1, goal);
        this.setState({goals : goals});
        this.setState({steps : []});
        console.log("log ", this.state.goals)
    }
    
    // Render ----------------------------------------------------------------------
    render() {
        const currentDate = new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
        const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
        const red = {backgroundColor : '#E91E63'};
        const blue = {backgroundColor : '#2196F3'};
        const yellow = {backgroundColor : '#FFCA28'}; 
        // this.refreshAt(11, 20, 0);

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
                                            stepsvalue={this.state.stepsvalue}
                                            goals={this.state.goals} 
                                            steps={this.state.steps}
                                            editVisibles={this.state.editVisibles}
                                            showEditDiv={this.showEditDiv}
                                            handleChangeForms={this.handleChangeForms} 
                                            handleChangeSteps={this.handleChangeSteps}
                                            handleGoalsSubmit={this.handleGoalsSubmit} 
                                            handleStepsSubmit={this.handleStepsSubmit}
                                            removeGoalItem={this.removeGoalItem} 
                                            archiveGoalItem={this.archiveGoalItem}
                                            appendStep={this.appendStep}
                                            addStepsToGoal={this.addStepsToGoal}
                                        />)
                                    }/>
                                    <Route path="/archive" render={props =>
                                        (<Archive 
                                            archivedTasks={this.state.archivedTasks} 
                                            archivedGoals={this.state.archivedGoals}
                                        />)
                                    }/>
                                </div>
                            </Router>
                        </div>
                    </div>
                    <h3 id="points">total points: {this.state.points}</h3>
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

// addStepsToGoal = (id, steps) => {
//     const index = this.state.goals.findIndex(goal => goal.id === id);
//     if(index === -1) {
//         console.log("error Dashboard line:224");
//     } else {
//         this.setState({
//             goals: [...this.state.goals.slice(0, index),
//             Object.assign({}, this.state.goals[index], steps),
//             ...this.state.goals.slice(index + 1)]
//         });
//     }
//     this.setState({steps : []});
// }