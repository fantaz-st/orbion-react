import React from 'react';
import classes from './Question.module.css';

const Question = props => {
  const toggleQuestionVisibility = () => {
    props.onToggleQuestion(props.id);
  };

  return (
    /*  <div className={classes.question}>
      <div className={classes['question-inner']}>
        <h2>{props.FAQtitle}</h2>
        <div className={props.activeQuestion === +props.id ? `${classes.show} ${classes['question-text']}` : classes['question-text']}>
          <p>{props.FAQanswer}</p>
        </div>
        <button className={classes['question-button']}>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  ); */
    <div className={classes.question}>
      <div
        className={props.activeQuestion === props.id ? `${classes.title} ${classes['is-expanded']}` : classes.title}
        onClick={toggleQuestionVisibility}
      >
        {props.FAQtitle}
      </div>
      <div
        className={props.activeQuestion === props.id ? `${classes.content} ${classes['is-expanded']}` : classes.content}
        onClick={toggleQuestionVisibility}
      >
        <p>{props.FAQanswer}</p>
      </div>
    </div>
  );
};

export default Question;
