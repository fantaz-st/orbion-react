import React from 'react';
import classes from './HeaderButtons.module.css';
import Button from '../UI/Button';

const HeaderButtons = () => {
  return (
    <div className={classes.buttons}>
      <Button btnClass="white-empty" btnTitle="Login" btnIcon="far fa-user" />
      <Button btnClass="blue" btnTitle="Get Started" />
    </div>
  );
};

export default HeaderButtons;
