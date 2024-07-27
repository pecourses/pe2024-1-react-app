import { Component } from "react";
import CounterC from "./components/CounterC";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
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
