import React from 'react';
import { MdOutlineAirplanemodeActive } from 'react-icons/md';
import { LogoContainer } from './logo.styled';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        Trip
        <MdOutlineAirplanemodeActive />
        Nation
      </Link>
    </LogoContainer>
  );
}
