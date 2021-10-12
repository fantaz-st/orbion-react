import React, { useState, useEffect, useRef } from 'react';
import classes from './Hero.module.css';
import HeroButtons from './HeroButtons';

import heroImage from '../../assets/images/hero-image-1.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const domRefCurrent = domRef.current;
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRefCurrent);
  }, []);
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <div className={classes['hero-text-content']}>
          <h3>Welcome to Orbion.</h3>
          <h1 className={classes['hero-text-header']}>
            DIGITAL
            <br />
            LABORATORY
          </h1>
          <p className={classes['hero-text-paragraph']}>
            Well thought-out strategy, sleek technology and kick-ass design.
            <br />
            Structure, design and interaction: all in perfect balance. That is the ultimate digital brand experience according to Orbion.
          </p>
          <HeroButtons />
        </div>
        <div className={classes['hero-image-content']}>
          <img
            ref={domRef}
            className={isVisible ? `fadeInUp ${classes['hero-image']}` : classes['hero-image']}
            src={heroImage}
            alt="Travel app on hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
