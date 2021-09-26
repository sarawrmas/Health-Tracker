import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import M from "materialize-css";
import Auth from '../utils/auth';

const Nav = () => {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  });

  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <Navbar className="teal"
        alignLinks="right"
        brand={<a href="/">Health Tracker</a>}
        menuIcon={<img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="menu toggle"/>}
      >
        {Auth.loggedIn() ? (
          <NavItem href="/" onClick={logout}>Logout</NavItem>
        ) : (
          <NavItem href="/login">Login</NavItem>
        )}

        <NavItem href="/workout-search">Search Workouts</NavItem>
        <NavItem href="/meal-planner">Plan Meals</NavItem>
      </Navbar>
    </div>
  )
}

export default Nav;