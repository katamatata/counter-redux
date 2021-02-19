import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const onButtonClicked = (action) => {
  store.dispatch({ type: action });
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Counter = ({ state }) => {
  return <div>{state}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  return (
    <div>
      <Header text='Counter with Redux' />
      <Counter state={store.getState()} />
      <Button handleClick={() => onButtonClicked('INCREMENT')} text='+1' />
      <Button handleClick={() => onButtonClicked('ZERO')} text='Reset' />
      <Button handleClick={() => onButtonClicked('DECREMENT')} text='-1' />
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);
