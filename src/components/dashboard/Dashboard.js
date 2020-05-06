import React from 'react';
import pathSettings from '../../icons/navigationIcons/settings.svg';
import '../../styles/dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weekday : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            date : new Date(),
            options : { year: 'numeric', month: 'long', day: 'numeric' },
        }
    }

    render() {
        const currentDate = this.state.date.toLocaleDateString(undefined, this.state.options);
        const currentDay = this.state.weekday[this.state.date.getDay()];

        return (
                <div className="dash-content-view">
                    <img id="settings" src={ pathSettings } alt=""></img>
                    <h2>{ currentDate }</h2>
                    <h3>{ currentDay }</h3>
                    <h1>Dashboard</h1>
                </div>
        );
    }
}

export default Dashboard;