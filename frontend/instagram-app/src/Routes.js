import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import React from 'react';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Post from './components/post/Post';

const Routes = () => (
  <Router>
    <main>
      <Nav/>
      <Route exact path='/' component ={Home}/>
      <Route exact path='/login' component ={Login}/>
      <Route exact path='/signup' component ={Signup}/>
      <Route exact path='/post' component = {Post}/>
    </main>
  </Router>
)

export default Routes; 