import styled from 'styled-components';

export const Nav = styled.nav`
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em;
  margin: auto;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 5px;

  a {
    font-weight: bold;
    box-sizing: border-box;
    text-decoration: none;
    color: #4caf50;
    padding: 5px 10px;
    border-radius: 3px;
    border: 2px solid #4caf50;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #4caf50;
      color: white;
    }
  }
`;
