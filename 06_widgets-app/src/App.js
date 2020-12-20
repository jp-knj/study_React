import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React ?',
    content: 'React is a Front end JavaScript framework'
  },
  {
    title: 'What is React ?',
    content: 'React is a Front end JavaScript framework'
  },
  {
    title: 'What is React ?',
    content: 'React is a Front end JavaScript framework'
  }
]

export default () => {
  return (
    <>
      <Accordion items={ items }/>
    </>
  );
};
