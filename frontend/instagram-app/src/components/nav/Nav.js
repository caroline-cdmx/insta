import React, { Component } from 'react';
import './style.css';

const Nav = () => (
  <nav class="navbar navbar-expand-lg fixed-top">
    <i class="fab fa-instagram fa-2x"></i>
    <a class="navbar-brand" href="#">Instagram</a>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
    </form>
    <div class="collapse navbar-collapse float-right" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Regístrate</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Iniciar sesión</a>
        </li>
      </ul>
    </div>
  </nav>
    )
    
export default Nav; 