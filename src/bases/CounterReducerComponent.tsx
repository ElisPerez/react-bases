import { useReducer } from 'react';

interface CountState {
  changes: number;
  counter: number;
  previous: number;
}

const INITIAL_STATE: CountState = {
  changes: 0,
  counter: 0,
  previous: 0,
};

// type CountAction = {
//   type: 'increment' | 'decrement' | 'reset';
// } // OR...
type CounterAction = { type: 'increaseBy'; payload: { value: number } } | { type: 'reset' };

const reducerName = (state: CountState, action: CounterAction): CountState => {
  const {changes, counter} = state;
  switch (action.type) {
    case 'increaseBy':
      return {
        changes: changes + 1,
        counter: counter + action.payload.value,
        previous: counter,
      };
    case 'reset':
      return {
        changes: 0,
        counter: 0,
        previous: counter,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  // const [{ changes, counter, previous }, dispatch] = useReducer(reducerName, INITIAL_STATE);
  const [countState, dispatch] = useReducer(reducerName, INITIAL_STATE);

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };
  return (
    <div>
      <h2>Counter Reducer:</h2>
      <pre>{JSON.stringify(countState, null, 2)}</pre>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
