import React, { PropTypes } from 'react';
import { Link } from 'react-router'

const NavbarItem = ({ name, link }) => {
  return (
    <li className="nav-item">
      <Link to={`${link}`}>{name}</Link>
    </li>
  );
};

NavbarItem.propTypes = {
  
};

export default NavbarItem;
