import { Component } from "react";

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
      page: 1,
    };
  }

  loadUsers = () => {
    this.setState({ isFetching: true });
    fetch(`https://randomuser.me/api?page=${this.state.page}&results=5&seed=js`)
      .then(response => response.json())
      .then(data => this.setState({ users: data.results }))
      .catch(err => this.setState({ error: err }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadUsers();
    }
  }

  nextPage = () => this.setState({ page: this.state.page + 1 });

  render() {
    const { users, isFetching, error } = this.state;
    return (
      <div>
        <button>prev</button>
        <button onClick={this.nextPage}>next</button>
        {isFetching && <div>Loading... Please wait.</div>}
        {error && <div>ERROR</div>}
        {!isFetching &&
          !error &&
          users.map(u => (
            <li key={u.login.uuid}>
              {u.name.first} {u.name.last}
            </li>
          ))}
      </div>
    );
  }
}

export default UsersLoader;
