import React, { Component } from 'react';
import './style.css';

const Nav = () => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <div className="row">
        <a className="brand-name col-3">
          <i className="fab fa-instagram fa-2x align-middle"></i>
          <img className= "insta" src="http://pngimg.com/uploads/instagram/instagram_PNG5.png" alt="instagram name"/>
        </a>
        
        <form className="form-inline col-4">
          <input className="form-control mr-sm-2 mx-auto" type="search" placeholder="Buscar" aria-label="Search"/>
        </form>
        <div className="collapse navbar-collapse justify-content-end col-4" id="navbarNav">
          <ul className="navbar-nav">
            <div className="home-page-link">
              <li className="nav-item active">
                <a className="nav-link" href="#"><i className="fal fa-edit fa-lg"></i></a>
              </li>
            </div>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fal fa-users fa-lg"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fal fa-user-circle fa-lg"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    )
    
export default Nav; 