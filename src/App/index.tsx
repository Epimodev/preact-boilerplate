import { h } from 'preact';
import Icon from 'src/components/Icon';
import TimePage from 'src/pages/Time';
import CounterPage from 'src/pages/Counter';
import checkmarkIcon from 'src/icons/checkmark.svg';
import * as style from './style.scss';

interface Props {}

function App(props: Props) {
  return (
    <div className={style.container}>
      <h2>Hello World!</h2>
      <Icon className={style.icon} href={checkmarkIcon} />
      <TimePage />
      <CounterPage />
    </div>
  );
}



export default App;
