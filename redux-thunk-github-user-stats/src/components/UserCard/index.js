import React, { Component } from 'react';
import './UserCard.scss';

class UserCard extends Component {
  render() {
    const { user } = this.props;
    const {
      avatar_url,
      login,
      name,
      followers,
      following,
      public_gists,
      public_repos,
      location,
      html_url,
    } = user;
    return (
      <div className="user-card__container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={ avatar_url } alt="Avatar" />
              <h4>{ login } ({ name })</h4>
            </div>
            <div className="flip-card-back">
              <p>Followers: { followers }</p> 
              <p>Following: { following }</p>
              <p>Public repos: { public_repos }</p>
              <p>Public gists: { public_gists }</p>
              <p>{ location != null ?  location : 'Location not provided'}</p>
              <p><a href={ html_url } rel="noopener noreferrer" target="_blank">Github profile</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default UserCard;