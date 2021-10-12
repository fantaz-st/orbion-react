import React, { useState } from 'react';
import classes from './Testimonials.module.css';

import profilePicture1 from '../../assets/images/testimonials/profile-pic-1.jpg';
import profilePicture2 from '../../assets/images/testimonials/profile-pic-2.jpg';
import profilePicture3 from '../../assets/images/testimonials/profile-pic-3.jpg';
import profilePicture4 from '../../assets/images/testimonials/profile-pic-4.jpg';
import SingleTestimonial from './SingleTestimonial';

const Testimonials = () => {
  const [x, setX] = useState(0);
  const testimonials = [
    {
      profileName: 'Čedomir Babić',
      profilePicture: profilePicture1,
      submitDate: '05.10.2021.',
      testimonialText: 'Some may never live, but the crazy never die',
    },
    {
      profileName: 'Fan Taz',
      profilePicture: profilePicture2,
      submitDate: '02.06.2021.',
      testimonialText: 'Fate Leads the Willing; the Unwilling it Drags',
    },
    {
      profileName: 'Krsto',
      profilePicture: profilePicture3,
      submitDate: '06.09.2021.',
      testimonialText: 'Luck is what happens when preparation meets opportunity.',
    },
    {
      profileName: 'Čedomor Lmao',
      profilePicture: profilePicture4,
      submitDate: '07.08.2021.',
      testimonialText: 'Every new beginning comes from some other beginnings end.',
    },
  ];

  const changeSlide = side => {
    if (side === 'left') {
      x === 0 ? setX(-100 * (testimonials.length - 1)) : setX(x + 100);
    }
    if (side === 'right') {
      x === -100 * (testimonials.length - 1) ? setX(0) : setX(x - 100);
    }
  };

  return (
    <section className={classes.testimonials}>
      <div className={classes.container}>
        <div className={classes['testimonials-slider']}>
          {testimonials.map(test => (
            <SingleTestimonial
              key={test.profileName}
              profileName={test.profileName}
              profilePicture={test.profilePicture}
              submitDate={test.submitDate}
              testimonialText={test.testimonialText}
              x={x}
            />
          ))}
        </div>
        <button className={classes['slide-left']} onClick={changeSlide.bind(this, 'left')}>
          <span className={classes.chevron}></span>
        </button>
        <button className={classes['slide-right']} onClick={changeSlide.bind(this, 'right')}>
          <span className={classes.chevron}></span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
