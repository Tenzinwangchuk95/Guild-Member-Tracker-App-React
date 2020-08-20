import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <NavLink to="/" className="home">Home</NavLink>
          <ul className="links">
            <NavLink className="new-member" to="/members/new">New Member</NavLink>
            <br/>
            <NavLink className="members" to="/members">Member List</NavLink>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar