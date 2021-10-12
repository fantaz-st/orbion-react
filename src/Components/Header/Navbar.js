import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <ul>
        <li>
          <a href="index.html">Services</a>
        </li>
        <li>
          <a href="index.html">Features</a>
        </li>
        <li>
          <a href="index.html">Testimonial</a>
        </li>
        <li>
          <a href="index.html">The Team</a>
        </li>
        <li>
          <a href="index.html">Pricing</a>
        </li>
        <li>
          <a href="index.html">FAQs</a>
        </li>
        <li>
          <a href="index.html">News</a>
        </li>
        <li>
          <a href="index.html">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
