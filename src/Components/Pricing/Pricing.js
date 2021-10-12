import React from 'react';
import { useState } from 'react/cjs/react.development';
import Plan from './Plan';
import classes from './Pricing.module.css';

const Pricing = () => {
  const [activePlan, setActivePlan] = useState(2);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const onCardClick = val => {
    setActivePlan(val);
  };

  return (
    <section className={classes.pricing}>
      <div className={classes.container}>
        <div className={classes['pricing-text']}>
          <h1>Choose your plan</h1>
          <p>Different layouts and styles for team sections.</p>
          <div className={classes['plan-toggler']}>
            <p className={`${!checked ? classes.bold : ''}`}>Monthly</p>
            <div className={classes['checkbox-div']}>
              <input type="checkbox" id="switch" checked={checked} onChange={handleChange} />
              <label htmlFor="switch">Toggle</label>
            </div>
            <p className={`${checked ? classes.bold : ''}`}>Yearly</p>
          </div>
        </div>
        {!checked && (
          <div className={classes['pricing-plans-monthly']}>
            <Plan
              position="1"
              activePlan={activePlan}
              planTitle="Fresh"
              planPrice="04"
              planDescription="Get your 14 day free trial"
              planFeatures={[' 60-day chat history', ' 15 GB cloud storage']}
              handleCardClick={onCardClick}
            />
            <Plan
              mostPopular="true"
              position="2"
              activePlan={activePlan}
              planTitle="Sweet"
              planPrice="10"
              planDescription="Billed $276 per website annually"
              planFeatures={[' 60-day chat history', ' 50 GB cloud storage', ' 24/7 Support']}
              handleCardClick={onCardClick}
            />
            <Plan
              position="3"
              activePlan={activePlan}
              planTitle="Fresh"
              planPrice="16"
              planDescription="Oh my God what a deal!"
              planFeatures={[' 60-day chat history', ' 100 GB cloud storage', 'Data security', '24/7 Support']}
              handleCardClick={onCardClick}
            />
          </div>
        )}
        {checked && (
          <div className={classes['pricing-plans-yearly']}>
            <Plan
              position="1"
              activePlan={activePlan}
              planTitle="Fresh"
              planPrice="04"
              planDescription="Get your 14 day free trial"
              planFeatures={[' 60-day chat history', ' 15 GB cloud storage']}
              handleCardClick={onCardClick}
            />
            <Plan
              position="2"
              activePlan={activePlan}
              planTitle="Sweet"
              planPrice="10"
              planDescription="Billed $276 per website annually"
              planFeatures={[' 60-day chat history', ' 50 GB cloud storage', ' 24/7 Support']}
              handleCardClick={onCardClick}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
