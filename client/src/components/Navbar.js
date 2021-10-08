import React from 'react';
import { SideNav, SideNavItem, Navbar } from 'react-materialize'
import Auth from '../utils/auth';
// import MenuIcon from '../assets/icons/menu.png';

const Nav = () => {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  }

  return (
    <div>
      <Navbar alignLinks="left" brand={<a href="/" className="hover-el">Health Companion</a>} centerLogo className="teal">
        <SideNav trigger={
          <i className="large material-icons hover-el">menu</i>
        }>
          {Auth.loggedIn() ? (
            <>
              <SideNavItem className="user-info"
                user={{
                  background: "images/heart.jpg",
                  email: Auth.getProfile().data.email,
                  name: Auth.getProfile().data.firstName + " " + Auth.getProfile().data.lastName
                }}
                userView
              />
              <SideNavItem href="/" onClick={logout}>Logout</SideNavItem>
            </>
          ) : (
            <SideNavItem href="/login">Login</SideNavItem>
          )}
          <SideNavItem divider />
          <SideNavItem href="/workout-search">Search Workouts</SideNavItem>
          <SideNavItem href="/my-sets">My Workout Sets</SideNavItem>
          <SideNavItem divider />
          <SideNavItem href="/meal-planner">Search Meals</SideNavItem>
          <SideNavItem href="/my-meals">My Meal Plan</SideNavItem>
        </SideNav>
      </Navbar>
    </div>
  )
}

export default Nav;