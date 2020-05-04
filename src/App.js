import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tasks />
        <Footer />
      </div>
    );
  }
}

export default App;