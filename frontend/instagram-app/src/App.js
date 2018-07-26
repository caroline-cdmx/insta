import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Nav from './components/nav/Nav';
import Post from './components/post/Post';

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
