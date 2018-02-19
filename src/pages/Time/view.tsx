import { h } from 'preact';
import Title from 'src/components/Title';
import Clock from 'src/components/Clock';

interface Props {}

function TimePage(props: Props) {
  return (
    <div>
      <Title>Welcome to Time page</Title>
      <Clock />
    </div>
  );
}

export default TimePage;
