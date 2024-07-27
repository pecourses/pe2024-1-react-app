import { Component } from "react";

class CounterC extends Component {
  constructor(props) {
    super(props);

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

export default CounterC;
