import React from 'react';
import classes from './MusicFunction.module.css';

const MusicFunction = props => {
  return (
    <div className={classes['music-single-function']}>
      <i className="fas fa-check"></i>
      <div className={classes.text}>
        <h2>{props.singleFunctionTitle}</h2>
        <p>{props.singleFunctionDescription}</p>
      </div>
    </div>
  );
};

export default MusicFunction;
