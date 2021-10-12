import React from 'react';
import classes from './Button.module.css';

const Button = props => {
  const icon = props.btnIcon ? (
    <div>
      <i className={`${props.btnIcon} ${classes.fa}`}></i>
      {props.btnTitle}
    </div>
  ) : (
    props.btnTitle
  );
  return <button className={`${classes[`${props.btnClass}`]} ${classes.button}`}>{icon}</button>;
};

export default Button;
