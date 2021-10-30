import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

// const toDos = ['Buy ice cream.', 'Eat ice cream.', 'Go to the gym.'];

const toDos = [
  { id: 123, task: 'Buy ice cream' },
  { id: 456, task: 'Eat ice cream' },
  { id: 789, task: 'Go to the gym.' },
];

ReactDOM.render(<MyList theList={toDos} />, document.getElementById('root'));
