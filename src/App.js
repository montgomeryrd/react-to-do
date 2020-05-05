import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import TasksPage from './components/contents/Tasks';
import './styles/App.css';

let store = createStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component {
  render() {
    return (
      <main>
        <Provider store={ store }>
          <BrowserRouter>
            <Dashboard />
            <Route exact path="/" component={ TasksPage }/>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;