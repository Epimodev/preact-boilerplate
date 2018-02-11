import { h } from 'preact';
import Icon from 'src/components/Icon';
import Clock from 'src/components/Clock';
import checkmarkIcon from 'src/icons/checkmark.svg';
import * as style from './style.scss';

console.log(environment);

function App() {
  return (
    <div className={style.container}>
      <h2>Hello World!</h2>
      <Icon className={style.icon} href={checkmarkIcon} />
      <Clock />
    </div>
  );
}

export default App;
