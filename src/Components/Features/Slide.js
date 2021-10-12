import React from 'react';
import classes from './Slide.module.css';

import Button from '../UI/Button';

const Slide = props => {
  return (
    <div className={classes['features-slides-single']}>
      {/* start single */}
      <div className={classes['features-slides-image']}>
        <img src={props.imgSrc} alt={props.slideTitle} />
      </div>
      <div className={classes['features-slides-text']}>
        <h3>{props.slideTitle}</h3>
        <h1>{props.slidePhrase}</h1>
        <p className="mb30">{props.slideDescription}</p>
        <Button btnClass="blue" btnTitle="Learn More" />
      </div>
    </div>
  );
};

export default Slide;
