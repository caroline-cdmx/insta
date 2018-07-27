import React, { Component } from 'react';
import './style.css';

class Post extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container container--content">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="user col-s12">
                <img className="avatar" src="https://78.media.tumblr.com/avatar_c0f6c239cdb6_128.pnj" alt=""/>
                <span className="username">Eva Longoria </span>
              </div>
              <div className="image-content">
                <img className="insta-image" src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/Fotolia_68533084_Subscription_XL.jpg" alt="Card image cap"/>
              </div>
                <div className="card-body description">
                  <i className="heart fal fa-heart fa-2x"></i>
                  <p className="likes">Le gusta</p>
                  <p className="card-text">Cancún</p>
                  <p className="card-text">#holidays</p>
                </div>
            </div>
          </div>
        </div>
      </div>
        )
      }
}
export default Post;