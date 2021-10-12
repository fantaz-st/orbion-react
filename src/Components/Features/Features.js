import React, { useState } from 'react';
import classes from './Features.module.css';

import cinemaImage0 from '../../assets/images/apps/cinemaapp/cinema-app-0.png';
import cinemaImage1 from '../../assets/images/apps/cinemaapp/cinema-app-1.png';
import cinemaImage2 from '../../assets/images/apps/cinemaapp/cinema-app-2.png';
import cinemaImage3 from '../../assets/images/apps/cinemaapp/cinema-app-3.png';
import Slide from './Slide';

const Features = () => {
  const [activeSlide, setActiveSlide] = useState('banking');

  const changeActiveSlide = e => {
    setActiveSlide(e.target.value);
  };

  return (
    <section className={classes.features}>
      <div className={classes.container}>
        <div className={classes['features-menu']}>
          <button
            className={`${classes['features-menu-button']} ${activeSlide === 'banking' ? classes.active : ''}`}
            value="banking"
            onClick={changeActiveSlide}
          >
            <i className="fas fa-piggy-bank"></i> Banking Management
          </button>
          <button
            className={`${classes['features-menu-button']} ${activeSlide === 'cinema' ? classes.active : ''}`}
            value="cinema"
            onClick={changeActiveSlide}
          >
            <i className="fas fa-film"></i> Cinema Tickets
          </button>
          <button
            className={`${classes['features-menu-button']} ${activeSlide === 'airtrip' ? classes.active : ''}`}
            value="airtrip"
            onClick={changeActiveSlide}
          >
            <i className="fas fa-helicopter"></i> Air Trip Booking
          </button>
          <button
            className={`${classes['features-menu-button']} ${activeSlide === 'tour' ? classes.active : ''}`}
            value="tour"
            onClick={changeActiveSlide}
          >
            <i className="fas fa-plane"></i> Tour Booking
          </button>
        </div>
        {/* <div className={classes['features-slides']}> */}
        {activeSlide === 'banking' && (
          <Slide
            imgSrc={cinemaImage0}
            slideTitle="Be amazed by the"
            slidePhrase="Beautiful Banking App"
            slideDescription="Car boot absolutely bladdered posh burke the wireless mush some dodg."
          />
        )}
        {activeSlide === 'cinema' && (
          <Slide
            imgSrc={cinemaImage1}
            slideTitle="Feast your eyes upon"
            slidePhrase="The marvel of our Cinema App"
            slideDescription="Car boot absolutely bladdered posh burke the wireless mush some dodg."
          />
        )}
        {activeSlide === 'airtrip' && (
          <Slide
            imgSrc={cinemaImage2}
            slideTitle="Look how easy it is to use"
            slidePhrase="This Air Trip booking App"
            slideDescription="Car boot absolutely bladdered posh burke the wireless mush some dodg."
          />
        )}
        {activeSlide === 'tour' && (
          <Slide
            imgSrc={cinemaImage3}
            slideTitle="Don't you want to go to the destination from our"
            slidePhrase="Tour booking App"
            slideDescription="Car boot absolutely bladdered posh burke the wireless mush some dodg."
          />
        )}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Features;
