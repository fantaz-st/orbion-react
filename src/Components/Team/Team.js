import React, { useState, useEffect, useRef } from 'react';
import classes from './Team.module.css';

import TeamMember from './TeamMember';
import Button from '../UI/Button';

import memberPicure1 from '../../assets/images/team/team_member_1.jpg';
import memberPicure2 from '../../assets/images/team/team_member_2.jpg';
import memberPicure3 from '../../assets/images/team/team_member_3.jpg';
import memberPicure4 from '../../assets/images/team/team_member_4.jpg';

const Team = () => {
  const members = [
    {
      memberName: 'Jon Houston',
      memberPicure: memberPicure1,
      memberRole: 'CEO',
    },
    {
      memberName: 'Gavin Espinoza',
      memberPicure: memberPicure2,
      memberRole: 'Senior Backend Developer',
    },
    {
      memberName: 'Areli Suarez',
      memberPicure: memberPicure3,
      memberRole: 'Senior Frontend Developer',
    },
    {
      memberName: 'Tyrone Merritt',
      memberPicure: memberPicure4,
      memberRole: 'Human Resourcesa Head',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
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
    <section className={classes.team}>
      <div className={classes.container}>
        <div className={classes['team-text']}>
          <h1>Meet our Team Members</h1>
          <p>Different layouts and styles for team sections.</p>
        </div>
        <div className={classes['team-pictures']} ref={domRef}>
          {members.map((cur, index) => (
            <TeamMember
              visibility={isVisible}
              key={cur.memberName}
              position={index}
              memberPicture={cur.memberPicure}
              memberName={cur.memberName}
              memberRole={cur.memberRole}
            />
          ))}
        </div>
        <Button btnClass="white-empty" btnTitle="View all Members" />
      </div>
    </section>
  );
};

export default Team;
