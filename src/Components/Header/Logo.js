// import React, { useState, useEffect } from 'react';
import classes from './Logo.module.css';

import logoSvg from '../../assets/images/logo/orbion_0.svg';

const Logo = () => {
  const fullLogoName = 'orbion';

  /* const [logoText, setLogoText] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setLogoText(prevLogoText => prevLogoText + 1), 135);
    return () => window.clearInterval(timer);
  }); */

  return (
    <div className={classes.logo}>
      <img className={classes['logo-icon']} src={logoSvg} alt="orbion logo" />
      <h1 className={classes['logo-text']}>{fullLogoName}</h1>
      {/* <h1 className={classes['logo-text']}>{fullLogoName.substr(0, logoText)}.</h1> */}
    </div>
  );
};

export default Logo;
