import { h, Component } from 'preact';
import * as style from './style.scss';

interface Props {}

interface State {
  date: Date;
}

class Clock extends Component<Props, State> {
  interval: number;
  constructor(props: Props) {
    super(props);

    this.state = {
      date: new Date(),
    };

    this.tic = this.tic.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tic, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tic() {
    this.setState({ date: new Date() });
  }

  render(props: Props, state: State) {
    const { date } = state;

    return (
      <div className={style.clock}>
        It is : {date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
