import { CounterAction } from '../actions/actions';
import { CountState } from '../interfaces/interfaces';

export const reducerName = (state: CountState, action: CounterAction): CountState => {
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