import React from 'react';
import Logo from '../Header/Logo';
import Button from '../UI/Button';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.container}>
        <div className={classes['footer-upper']}>
          <div className={classes['footer-logo']}>
            <Logo />
            <p>Some may never live, but the crazy never die</p>
            <a href="index.html">
              Read more <i className="fas fa-chevron-right"></i>
            </a>
            <div className={classes['footer-upper-social-icons']}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
          <div className={classes['footer-link-column']}>
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Service</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={classes['footer-link-column']}>
            <h2>Support</h2>
            <ul>
              <li>Community</li>
              <li>Resources</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={classes['footer-link-column']}>
            <h2>Get In Touch</h2>
            <ul>
              <li>
                <i className="far fa-envelope"></i>
                <a href="mailto:info@orbion.com">info@orbion.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+385997973969">+385 99 797 3969</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <a href="_">Dr. Franje Tuđmana 17, Kaštela, Croatia</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes['footer-lower']}>
          <div className={classes['footer-lower-buttons']}>
            <Button btnClass="white-transparent" btnTitle="Download for Android" btnIcon="fab fa-android" />
            <Button btnClass="transparent-white" btnTitle="Download for iOS" btnIcon="fab fa-apple" />{' '}
          </div>
          <div className={classes['footer-lower-made-by']}>
            <p>Copyright © 2021 Orbion. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
