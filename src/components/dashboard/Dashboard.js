import React from 'react';
import { useSelector, connect } from 'react-redux';

import NavLinks from './NavLinks';

import TasksPage from '../contentview/Tasks';
import GoalsPage from '../contentview/Goals';
import ArchivePage from '../contentview/Archive';

import TasksForm from '../forms/TasksForm';
import GoalsForm from '../forms/GoalsForm';

import NavigateToTasks from '../../icons/navigationIcons/Task.svg';
import NavigateToGoals from '../../icons/navigationIcons/Goal.svg';
import NavigateToArchives from '../../icons/navigationIcons/Achievement.svg';
import Settings from '../../icons/navigationIcons/settings.svg';

import '../../styles/dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weekday : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            date : new Date(),
            options : { year: 'numeric', month: 'long', day: 'numeric' },
            page : "tasks",
            task : "",
            list : []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ task:e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.task) {
            this.state.list.push(this.state.task);
            this.setState({ task:"" });
            document.getElementById("tasks-content-view").value="";
        } else {
            this.setState({ task:"" });
            document.getElementById("tasks-content-view").value="";
        }
    }
    
    render() {
        const currentDate = this.state.date.toLocaleDateString(undefined, this.state.options);
        const currentDay = this.state.weekday[this.state.date.getDay()];
        const red = { backgroundColor : '#E91E63' };
        const blue = { backgroundColor : '#2196F3' };
        const yellow = { backgroundColor : '#FFCA28' };

        // const data = useSelector(state => state.val);        
        
        return (
            <div className="container">
                
                <div className="dash-content-view">
                    <img id="settings" src={ Settings } alt=""></img>
                    <h2>{ currentDate }</h2>
                    <h3>{ currentDay }</h3>
                    <h1>Dashboard</h1>
                    <div className="form-view">
                        { this.state.page === "tasks" ? <TasksForm /> : this.state.page === "goals" ? <GoalsForm /> : null }
                    </div>
                    <div className="navigation-links">
                        <NavLinks 
                            data = {{imgUrl:NavigateToTasks, bgcolor: red, link:"Tasks", count:"0"}}
                        />
                        <NavLinks 
                            data = {{imgUrl:NavigateToGoals, bgcolor: blue, link:"Goals", count:"0"}}
                        />
                        <NavLinks 
                            data = {{imgUrl:NavigateToArchives, bgcolor: yellow, link:"Archive", count:"0"}}
                        />
                    </div>
                </div>

                <div className="main-content-view">
                    { this.state.page === "tasks" ?
                        <TasksPage />
                    : this.state.page === "goals" ?
                        <GoalsPage />
                    : this.state.page === "archive" ?
                        <ArchivePage />
                    : null
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    task : state.task,
    list : state.list
});

// const mapDispatchtoProps = (dispatch, getState) => ({

// })


export default connect(mapStateToProps) (Dashboard);