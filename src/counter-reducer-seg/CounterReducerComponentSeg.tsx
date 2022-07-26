import { useReducer } from 'react';
import { CountState } from './interfaces/interfaces';
import { reducerName } from './store/counterReducer';

const INITIAL_STATE: CountState = {
  changes: 0,
  counter: 0,
  previous: 0,
};

export const CounterReducerComponentSeg = () => {
  const [countState, dispatch] = useReducer(reducerName, INITIAL_STATE);

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };
  return (
    <div>
      <h2>Counter Reducer Segment:</h2>
      <pre>{JSON.stringify(countState, null, 2)}</pre>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
