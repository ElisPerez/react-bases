import { useCounter } from '../hooks/useCounter';


export const CounterHook = () => {
  const {count, elementToAnimate, handleClick, handleReset} = useCounter({
    maxCount: 10,
  });

  return (
    <div>
      <h2>Counter With Hook:</h2>
      <h3 ref={elementToAnimate}>{count}</h3>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
