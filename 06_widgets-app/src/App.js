import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React ?',
    content: 'React is a Front end JavaScript framework'
  },
  {
    title: 'Why use React ?',
    content: 'React is a favorite JavaScript Library amang Enginners'
  },
  {
    title: 'How do you use React ?',
    content: 'You use React by creating components'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'Green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  },
];

export default () => {
  return (
    <div>
      <Dropdown options={options}/>
    </div>
  );
};
