import React, { Component } from 'react';
import './style.css';

const Nav = () => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <a className="brand-name">
      <i className="fab fa-instagram fa-2x"></i>
    </a>
    <a className="navbar-brand" href="#">Instagram</a>
    <form className="form-inline">
      <input className="form-control mr-sm-2 mx-auto" type="search" placeholder="Buscar" aria-label="Search"/>
    </form>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Regístrate</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Iniciar sesión</a>
        </li>
      </ul>
    </div>
  </nav>
    )
    
export default Nav; 