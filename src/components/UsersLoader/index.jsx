import { Component } from "react";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      users: [],
      isFetching: false,
      error: null,
    };
  }

  // cdm
  componentDidMount() {
    console.log("mount");
  }

  // cdup
  componentDidUpdate(prevProps, prevState) {
    console.log("update");
  }

  //cwun
  componentWillUnmount() {
    console.log("unmount");
  }
  click = () => {
    console.log("setState");
    this.setState({ isFetching: !this.state.isFetching });
  };
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.click}>+</button>
      </div>
    );
  }
}

export default UsersLoader;
