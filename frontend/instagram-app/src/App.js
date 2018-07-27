import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './components/nav/Nav';
import Posts from './components/posts/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Routes/>
      </div>
    );
  }
}

export default App;
