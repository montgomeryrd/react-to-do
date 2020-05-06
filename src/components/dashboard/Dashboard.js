import React from 'react';
import { connect } from 'react-redux';
import NavLinks from './NavLinks';
import TasksPage from '../contentview/Tasks';
import GoalsPage from '../contentview/Goals';
import ArchivePage from '../contentview/Archive';

import pathTasks from '../../icons/navigationIcons/Task.svg';
import pathGoals from '../../icons/navigationIcons/Goal.svg';
import pathArchives from '../../icons/navigationIcons/Achievement.svg';
import pathSettings from '../../icons/navigationIcons/settings.svg';

import '../../styles/dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weekday : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            date : new Date(),
            options : { year: 'numeric', month: 'long', day: 'numeric' },
            view : 'tasks'
        }
    }

    render() {
        const currentDate = this.state.date.toLocaleDateString(undefined, this.state.options);
        const currentDay = this.state.weekday[this.state.date.getDay()];
        const red = { backgroundColor : '#E91E63' };
        const blue = { backgroundColor : '#2196F3' };
        const yellow = { backgroundColor : '#FFCA28' };  

        return (
            <div className="container">
                
                <div className="dash-content-view">
                    <img id="settings" src={ pathSettings } alt=""></img>
                    <h2>{ currentDate }</h2>
                    <h3>{ currentDay }</h3>
                    <h1>Dashboard</h1>

                    <div className="navigation-links">
                        <NavLinks 
                            data = { {imgUrl:pathTasks, bgcolor: red, link:"tasks"} }
                        />
                        <NavLinks 
                            data = { {imgUrl:pathGoals, bgcolor: blue, link:"goals"} }
                        />
                        <NavLinks 
                            data = { {imgUrl:pathArchives, bgcolor: yellow, link:"archive"} }
                        />
                    </div>
                </div>

                <div className="main-content-view">
                    { this.state.view === "tasks" ?
                        <TasksPage />
                    : this.state.view === "goals" ?
                        <GoalsPage />
                    : this.state.view === "archive" ?
                        <ArchivePage />
                    : this.state.view === "faerie" }
                </div>
            </div>
        );
    }
}

let mapStateToProps = state => ({
    task: state.task,
    list: state.list
});

export default connect(mapStateToProps)(Dashboard);