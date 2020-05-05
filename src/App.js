import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';

let store = createStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component {
  render() {
    return (
      <main>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/" component={ Dashboard }/>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;