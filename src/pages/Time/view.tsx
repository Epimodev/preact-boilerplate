import { h } from 'preact';
import Clock from 'src/components/Clock';

interface Props {}

function TimePage(props: Props) {
  return (
    <div>
      <h2>Welcome to Time page</h2>
      <Clock />
    </div>
  );
}

export default TimePage;
