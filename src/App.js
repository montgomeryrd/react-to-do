import React from 'react';
// import { Provider } from 'react-redux';
// import createStore from './lib';
import Dashboard from './components/dashboard/Dashboard';

class App extends React.Component {
  render() { 
    return (
      <main>
        {/* <Provider store = {store}> */}
          <Dashboard />
        {/* </Provider> */}
       </main>
    );
  }
}

export default App;