import React, { useState, useEffect, useRef } from 'react';
import classes from './Blog.module.css';

import postImage1 from '../../assets/images/Blog/blog-1.jpg';
import postImage2 from '../../assets/images/Blog/blog-2.jpg';
import postImage3 from '../../assets/images/Blog/blog-3.jpg';
import Post from './Post';

const Blog = () => {
  const posts = [
    {
      postTitle: 'Motorola edge 20 Pro (Video)',
      postImage: postImage1,
      postDate: '06.07.2021.',
      postCategory: 'Smartphones,Motorola',
    },
    {
      postTitle: 'TEST: Fury Beast 3600 CL18',
      postImage: postImage2,
      postDate: '08.09.2021.',
      postCategory: 'Hardware,HyperX',
    },
    {
      postTitle: 'Logitech MX Keys Mini',
      postImage: postImage3,
      postDate: '10.11.2021.',
      postCategory: 'Peripherals,Logitech',
    },
  ];

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
    <section className={classes.blog}>
      <div className={classes.container} ref={domRef}>
        <div className={classes['blog-text']}>
          <h1>Latest blog posts</h1>
          <p>Different layouts and styles for blog posts section</p>
        </div>
        <div className={classes['blog-posts']}>
          {posts.map((post, index) => (
            <Post
              position={index}
              visibility={isVisible}
              key={post.postTitle}
              postTitle={post.postTitle}
              postImage={post.postImage}
              postDate={post.postDate}
              postCategory={post.postCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
