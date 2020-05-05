import React from 'react';
import NavLinks from '../contents/NavLinks';
import NavigateToTasks from '../../icons/navigationIcons/Task.svg';
import NavigateToGoals from '../../icons/navigationIcons/Goal.svg';
import NavigateToArchives from '../../icons/navigationIcons/Achievement.svg';
import Settings from '../../icons/navigationIcons/settings.svg';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weekday : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            date : new Date(),
            options : { year: 'numeric', month: 'long', day: 'numeric' }
        }
    }
    render() {
        const currentDate = this.state.date.toLocaleDateString(undefined, this.state.options);
        const currentDay = this.state.weekday[this.state.date.getDay()];
        const red = { backgroundColor : '#E91E63' };
        const blue = { backgroundColor : '#2196F3' };
        const yellow = { backgroundColor : '#FFCA28' };

        return (
            <div className="main-content-view">
                
                <img id="settings" src={ Settings } alt=""></img>
                <h1>Dashboard</h1>
                <h2>{ currentDate }</h2>
                <h3>{ currentDay }</h3>
                            
                <div className="navigation-links">
                    <NavLinks 
                        data = {{imgUrl:NavigateToTasks, bgcolor: red, link:"Tasks", count:"0"}}
                    />
                    <NavLinks 
                        data = {{imgUrl:NavigateToGoals, bgcolor: blue, link:"Goals", count:"0"}}
                    />
                    <NavLinks 
                        data = {{imgUrl:NavigateToArchives, bgcolor: yellow, link:"Archives", count:"0"}}
                    />
                </div>

            </div>
        
        );
    }
}

export default Dashboard;