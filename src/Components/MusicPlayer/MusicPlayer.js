import React, { useState, useEffect, useRef } from 'react';
import MusicFunction from './MusicFunction';
import classes from './MusicPlayer.module.css';

import musicPlayer from '../../assets/images/apps/music-player/music-player-app-0.png';

const MusicPlayer = () => {
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
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    }, options);

    observer.observe(domRef.current);

    return () => observer.unobserve(domRefCurrent);
  }, []);

  return (
    <section className={classes.music}>
      <div className={classes.container}>
        <div className={classes['music-text']}>
          <h3>Music Player</h3>
          <h1>Get a hold of our advanced media player</h1>
          <p>He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.</p>
          <div className={classes['music-functions']}>
            <MusicFunction singleFunctionTitle="Carefully designed" singleFunctionDescription="Mucker plastered bugger all mate morish are." />
            <MusicFunction singleFunctionTitle="Seamless Sync" singleFunctionDescription="Mucker plastered bugger all mate morish are." />
            <MusicFunction singleFunctionTitle="User interactive" singleFunctionDescription="Mucker plastered bugger all mate morish are." />
            <MusicFunction singleFunctionTitle="Fully responsive" singleFunctionDescription="Mucker plastered bugger all mate morish are." />
          </div>
        </div>
        <div className={classes['music-image']}>
          <img className={isVisible ? 'fadeInRight' : ''} style={{ opacity: '0' }} src={musicPlayer} alt="Music player app" ref={domRef} />
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
