import { useState } from 'react';

interface Props {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: Props) => {
  const [count, setCount] = useState(initialValue);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};
