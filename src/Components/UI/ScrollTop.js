import React from 'react';
import classes from './ScrollTop.module.css';

const ScrollTop = props => {
  return (
    <div className={classes['scroll-to-top']} onClick={props.onScrollToTop}>
      <i className="fas fa-chevron-up"></i>
    </div>
  );
};

export default ScrollTop;
