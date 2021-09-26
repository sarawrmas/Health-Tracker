import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import M from "materialize-css";

const Nav = () => {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  });

  return (
    <div>
      <Navbar className="teal"
        alignLinks="right"
        brand={<a href="/">Health Tracker</a>}
        menuIcon={<img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="menu toggle"/>}
      >
        <NavItem href="/workout-search">Search Workouts</NavItem>
        <NavItem href="/meal-planner">Plan Meals</NavItem>
      </Navbar>
    </div>
  )
}

export default Nav;