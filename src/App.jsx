import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Main from "./components/Main";

const isLogin = true;
const user = {
  specOffers: "You have -20% for all laptops",
};

function App() {
  const [isLight, setIsLight] = useState(true);

  const byttonStyle = {
    color: isLight ? "yellow" : "grey",
  };

  //! move to className
  const pageContainerStyle = {
    minHeight: "100vh",
    color: isLight ? "black" : "white",
    backgroundColor: isLight ? "white" : "black",
  };

  function changeTheme() {
    setIsLight(oldIsLight => !oldIsLight);
  }

  return (
    <div style={pageContainerStyle}>
      <Header isLogin={isLogin} />
      <button onClick={changeTheme} style={byttonStyle}>
        <i className="fa-solid fa-sun"></i>
      </button>
      <Main isLogin={isLogin} user={user} />
      <Counter />
    </div>
  );
}

export default App;

const App = () => {
  const user = { followers: 200 };
  return <UserCard user={user}></UserCard>;
};

const UserCard = ({ user }) => {
  const [followers, setFollowers] = useState(user.followers);

  return <div>{followers}</div>;
};
