import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { Nav, NavList } from './navbar.styled';

export default function NavBar() {
  return (
    <Nav>
      <Logo />
      <NavList>
        <Link to="/">Trips</Link>
        <Link to="/insertTrip">New Trip</Link>
      </NavList>
    </Nav>
  );
}
