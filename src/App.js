import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Tasks from './components/contentview/Tasks';
import Goals from './components/contentview/Goals';
import Archive from './components/contentview/Archive';
import NavView from './components/dashboard/NavLinks';

import pathTasks from './icons/navigationIcons/Task.svg';
import pathGoals from './icons/navigationIcons/Goal.svg';
import pathArchives from './icons/navigationIcons/Achievement.svg';

import './styles/App.css';

class App extends React.Component {
  render() {
    const red = { backgroundColor : '#E91E63' };
    const blue = { backgroundColor : '#2196F3' };
    const yellow = { backgroundColor : '#FFCA28' };  
    return (
      <Router>
        <Dashboard />
        <div className="navigation-links">
          <NavLink to="/"><NavView data = { {imgUrl:pathTasks, bgcolor: red} }/></NavLink>
          <NavLink to="/goals"><NavView data = { {imgUrl:pathGoals, bgcolor: blue} }/></NavLink>
          <NavLink to="/archive"><NavView data = { {imgUrl:pathArchives, bgcolor: yellow} }/></NavLink>
          <div className="container">
            <Route path="/" exact strict component={ Tasks }  />
            <Route path="/goals" exact strict component={ Goals }  />
            <Route path="/archive" exact strict component={ Archive }  />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;