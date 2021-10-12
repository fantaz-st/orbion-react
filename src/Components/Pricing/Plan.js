import React from 'react';
import Button from '../UI/Button';
import classes from './Plan.module.css';

const Plan = props => {
  const cardClick = () => {
    props.handleCardClick(props.position);
  };

  return (
    <div className={`${classes.plan} ${props.activePlan === props.position ? classes.active : ''}`} onClick={cardClick}>
      <h2>{props.planTitle}</h2>
      <h1 className={classes['plan-title']}>
        <span className={classes.superscript}>$</span>
        {props.planPrice}
        <span className={classes.subscript}>/month</span>
      </h1>
      <p className={classes['plan-description']}>{props.planDescription}</p>
      <div className={classes['plan-separator']}></div>
      <ul>
        {props.planFeatures.map(feature => (
          <li key={feature} className={classes['plan-feature']}>
            <i className="fas fa-check"></i>
            {feature}
          </li>
        ))}
      </ul>
      <Button btnClass={`${props.activePlan === props.position ? 'white-red-full' : 'white-red'}`} btnTitle="Choose plan" />
      {props.mostPopular && <div className={classes.ribbon}>Most popular!</div>}
    </div>
  );
};

export default Plan;
