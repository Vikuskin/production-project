import { useState } from 'react';
import * as classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className={classes.btn} onClick={increment}>
        increment
      </button>
      <button className={classes.green} onClick={decrement}>
        decrement
      </button>
    </div>
  );
};
