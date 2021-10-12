import React from 'react';
import classes from './SingleTestimonial.module.css';

const SingleTestimonial = props => {
  return (
    <div className={classes['single-testimonial']} style={{ transform: `translateX(${props.x}%)` }}>
      <img className={classes['profile-picture']} src={props.profilePicture} alt="Testimonials profile" />
      <p className={classes['profile-name']}>{props.profileName}</p>
      <p className={classes['submit-date']}>{props.submitDate}</p>
      <p className={classes['testimonial-text']}>{props.testimonialText}</p>
    </div>
  );
};

export default SingleTestimonial;
