import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

{
  /* <Route path="/about" Component={About} /> */
}
function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
