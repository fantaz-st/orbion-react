import React from 'react';
import classes from './Post.module.css';
import Button from '../UI/Button';

const Post = props => {
  return (
    <div
      className={props.visibility ? `fadeInUp ${classes.post}` : classes.post}
      style={{ opacity: '0', animationDelay: `${props.position * 200}ms` }}
    >
      <div className={classes['post-inner']}>
        <div className={classes['post-image']}>
          <img src={props.postImage} alt={props.postTitle} />
        </div>
        <div className={classes['post-text']}>
          <div className={classes['date-and-category']}>
            <p>{props.postDate}</p>
            <div className={classes.dot}></div>
            <p>{props.postCategory}</p>
          </div>
          <h1 className={classes['post-title']}>{props.postTitle}</h1>
          <Button btnClass="white-empty" btnTitle="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default Post;
