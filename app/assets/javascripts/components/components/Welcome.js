import React, { PropTypes } from 'react';
import Navbar from './Navbar';

const Welcome = () => {
  const items = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Signup', link: '/signup' },
    { name: 'Login', link: '/login' }
  ];

  return (
    <div>
      <Navbar items={items}/>
    </div>
  );
};

Welcome.propTypes = {
  
};

export default Welcome;
