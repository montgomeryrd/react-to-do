import React from 'react';
import NavLinks from '../contents/NavLinks';
import NavigateToTasks from '../../icons/navigationIcons/Task.svg';
import NavigateToGoals from '../../icons/navigationIcons/Goal.svg';
import NavigateToArchives from '../../icons/navigationIcons/Achievement.svg';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
  render() {
    return (
        <div className="main-content-view">
            <h1>Dashboard</h1>
            <div className="navigation-links">
                <NavLinks 
                    data = {{imgUrl:NavigateToTasks, color:"background-color:#F1948A", link:"Tasks", count:"0"}}
                    
                />
                <NavLinks 
                    data = {{imgUrl:NavigateToGoals, color:"background-color:#AED6F1", link:"Goals", count:"0"}}
                />
                <NavLinks 
                    data = {{imgUrl:NavigateToArchives, color:"background-color:#F9E79F", link:"Archives", count:"0"}}
                />
            </div>
        </div>
      
    );
  }
}

export default Dashboard;