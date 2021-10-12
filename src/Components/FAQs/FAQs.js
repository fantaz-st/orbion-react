import React from 'react';
import { useState } from 'react/cjs/react.development';
import classes from './FAQs.module.css';
import Question from './Question';

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      question: 'What do you guys charge for an hours work?',
      answer: 'Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie.',
    },
    {
      id: 2,
      question: 'What is your lol',
      answer: 'Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie.',
    },
    {
      id: 3,
      question: 'What do you guys charge for an hours work?',
      answer: 'Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie.',
    },
    {
      id: 4,
      question: 'What do you guys charge for an hours work?',
      answer: 'Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie.',
    },
    {
      id: 5,
      question: 'What do you guys charge for an hours work?',
      answer: 'Naff Oxford vagabond in my flat chinwag blatant grub tomfoolery that I bits and bobs up the duff cras boot bevvy no biggie.',
    },
  ];

  const toggleQuestion = val => {
    setActiveQuestion(val === activeQuestion ? 0 : val);
  };

  return (
    <section className={classes.FAQs}>
      <div className={classes.container}>
        <div className={classes['FAQs-text']}>
          <h1>Frequently asked questions</h1>
          <p>Different layouts and styles for team sections.</p>
        </div>
        <div className={classes['FAQs-questions']}>
          {questions.map(question => (
            <Question
              key={question.id}
              onToggleQuestion={toggleQuestion}
              FAQtitle={question.question}
              FAQanswer={question.answer}
              activeQuestion={activeQuestion}
              id={question.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
