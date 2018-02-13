import { h } from 'preact';
import Clock from 'src/components/Clock';

interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
  double: () => void;
}

function CounterPage(props: Props) {
  const { count, increment, decrement, double } = props;

  return (
    <div>
      <h2>Welcome to counter page</h2>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
    </div>
  );
}

export default CounterPage;
