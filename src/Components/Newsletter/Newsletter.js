import React, { useState, useEffect, useRef } from 'react';
import classes from './Newsletter.module.css';

import Button from '../UI/Button';

import newsletterImg1 from '../../assets/images/apps/card/card-app-0.png';
import newsletterImg2 from '../../assets/images/apps/card/card-app-1.png';

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const domRefCurrent = domRef.current;
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        console.log('doin it');
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    }, options);

    observer.observe(domRef.current);

    return () => observer.unobserve(domRefCurrent);
  }, []);

  return (
    <section className={classes.newsletter} ref={domRef}>
      <div className={isVisible ? `fadeInUp ${classes.container}` : classes.container} style={{ animationDelay: 0 }}>
        <div className={classes['newsletter-text']}>
          <h1 className={classes['newsletter-text-title']}>Start your project with orbion.</h1>
          <p className={classes['newsletter-text-subtitle']}>We will email you only about this product.</p>
          <div className={classes['newsletter-input']}>
            <input type="text" placeholder="Your email" />
            <Button btnClass="dark-blue" btnTitle="Subscribe" />
          </div>
        </div>
        <div className={classes['newsletter-images']}>
          <img className={classes.imageOne} src={newsletterImg1} alt="Newsletter app one" />
          <img className={classes.imageTwo} src={newsletterImg2} alt="Newsletter app one" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
