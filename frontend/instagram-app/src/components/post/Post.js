import React, { Component } from 'react';
import './style.css';

class Post extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card" style="width: 18rem;">
        <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
        )
      }
}