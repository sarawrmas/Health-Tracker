import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

const Nav = () => {
  return (
    <div>
      <Navbar className="teal"
        alignLinks="right"
        brand={<a href="/">Health Tracker</a>}
        menuIcon={<Icon><img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/></Icon>}
      >
        <NavItem href="/workout-search">Search Workouts</NavItem>
        <NavItem href="/meal-planner">Plan Meals</NavItem>
      </Navbar>
    </div>
  )
}

export default Nav;