import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './bases/CounterReducerComponent';

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15} />
      <hr />
      <CounterBy initialValue={15} />
      <hr />
      <CounterEffect />
      <hr />
      <CounterHook />
      <hr />
      <CounterReducerComponent />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
