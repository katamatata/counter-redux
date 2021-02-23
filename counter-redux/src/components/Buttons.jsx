import React from 'react';
import { useDispatch } from 'react-redux';

import { incrementCounter, decrementCounter, resetCounter } from '../actions';

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Buttons = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter);
  };

  const handleDecrement = () => {
    dispatch(decrementCounter);
  };

  const handleReset = () => {
    dispatch(resetCounter);
  };

  return (
    <div>
      <Button handleClick={handleIncrement} text='+1' />
      <Button handleClick={handleReset} text='Reset' />
      <Button handleClick={handleDecrement} text='-1' />
    </div>
  );
};

export default Buttons;
