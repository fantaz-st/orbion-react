import React, { useState, useEffect, useRef } from 'react';
import Card from '../UI/Card';
import classes from './Services.module.css';

const Services = () => {
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
    <section className={classes.services}>
      <div className={classes.container}>
        <div className={classes['services-text-content']}>
          <h1>
            Designed with
            <br />
            The applicant in mind.
          </h1>
          <p>The full monty spiffing good time no biggie cack grub fantastic. </p>
        </div>
        <div className={classes.cards} ref={domRef}>
          <Card visibility={isVisible} position="1">
            <div className={`${classes['services-icon']} ${classes.red}`}>
              <i className="fas fa-sync-alt"></i>
            </div>
            <h2>Searching</h2>
            <p>Mucker plastered bugger all mate morish are.</p>
          </Card>

          <Card visibility={isVisible} position="2">
            <div className={`${classes['services-icon']} ${classes.green}`}>
              <i className="fas fa-pencil-ruler"></i>
            </div>
            <h2>Searching</h2>
            <p>Mucker plastered bugger all mate morish are.</p>
          </Card>
          <Card visibility={isVisible} position="3">
            <div className={`${classes['services-icon']} ${classes.yellow}`}>
              <i className="fas fa-tools"></i>
            </div>
            <h2>Searching</h2>
            <p>Mucker plastered bugger all mate morish are.</p>
          </Card>
          <Card visibility={isVisible} position="4">
            <div className={`${classes['services-icon']} ${classes.blue}`}>
              <i className="fas fa-headset"></i>
            </div>
            <h2>Searching</h2>
            <p>Mucker plastered bugger all mate morish are.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
