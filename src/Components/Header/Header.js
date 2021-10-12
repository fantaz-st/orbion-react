import React from 'react';

import classes from './Header.module.css';
import HeaderButtons from './HeaderButtons';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <section className={classes.header}>
      <div className={classes.container}>
        <Logo />
        <Navbar />
        <HeaderButtons />
      </div>
    </section>
  );
};

export default Header;
