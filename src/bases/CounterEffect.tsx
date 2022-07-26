import { useEffect, useState } from 'react';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [count, setCount] = useState(5);

  const handleClick = () => {
    setCount(prev => Math.min(prev + 1, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (count < MAXIMUM_COUNT) return;
    alert('Maximum count reached!');
  }, [count]);

  return (
    <div>
      <h2>CounterEffect: {count}</h2>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};
