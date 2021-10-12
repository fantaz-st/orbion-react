import React from 'react';
import classes from './TeamMember.module.css';

const TeamPictures = props => {
  return (
    <div
      className={props.visibility ? `fadeInUp ${classes['team-member']}` : classes['team-member']}
      style={{ opacity: '0', animationDelay: `${props.position * 200}ms` }}
    >
      <div className={classes['member-picture']}>
        <img src={props.memberPicture} alt={props.memberName} />
      </div>
      <div className={classes['member-social-icons']}>
        <a className={classes['social-link']} href="_">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className={classes['social-link']} href="_">
          <i className="fab fa-twitter"></i>
        </a>
        <a className={classes['social-link']} href="_">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className={classes['member-text']}>
        <h2>{props.memberName}</h2>
        <p>{props.memberRole}</p>
      </div>
    </div>
  );
};

export default TeamPictures;
