import React from 'react';
import classes from './Card.module.css';

const Card = props => {
  return (
    <div
      className={props.visibility ? `fadeInUp ${classes.card}` : classes.card}
      style={{ opacity: '0', animationDelay: `${props.position * 200}ms` }}
    >
      {props.children}
    </div>
  );
};

export default Card;
