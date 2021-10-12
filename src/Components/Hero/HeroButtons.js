import React from 'react';
import classes from './HeroButtons.module.css';
import Button from '../UI/Button';

const HeroButtons = () => {
  return (
    <div className={classes.buttons}>
      <Button btnClass="blue" btnTitle="Download for Android" btnIcon="fab fa-android" />
      <Button btnClass="white-empty" btnTitle="Download for iOS" btnIcon="fab fa-apple" />
    </div>
  );
};

export default HeroButtons;
