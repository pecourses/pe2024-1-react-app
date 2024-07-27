import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props); // this.props

    // const [step, setStep] = useState({step: 1})
    this.state = {
      step: 1,
    };
    // this.state.step
  }

  changeStep = e => {
    this.setState({ step: Number(e.target.value) });
  };

  render() {
    return (
      <>
        <input
          type="number"
          value={this.state.step}
          onChange={this.changeStep}
        />
        <CounterC step={this.state.step} />
      </>
    );
  }
}

export default App;
// Counter({step:1})              - function
// new Counter({step:1}).render() - class
class CounterC extends Component {
  constructor(props) {
    super(props); // this.props.step

    this.state = {
      count: 0,
    };
  }

  dec = () => {
    this.setState({ count: this.state.count - this.props.step });
  };

  inc = () => {
    this.setState({ count: this.state.count + this.props.step });
  };

  // реалізувати inc
  render() {
    const countHello = "Count:";
    return (
      <div>
        <button onClick={this.dec}>-</button>
        {countHello} {this.state.count}
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}
