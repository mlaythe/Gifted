import React, { PropTypes } from 'react';
import NavbarItem from './NavbarItem';

const Navbar = ({ items }) => {
  return (
    <nav className="navbar">
      <ul className="nav nav-tabs nav-justified">
      {
        items.map((item, index) => <NavbarItem key={index} name={item.name} link={item.link} />)
      }
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  
};

export default Navbar;
