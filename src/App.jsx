import { useEffect } from "react";
import {
  Link,
  NavLink,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

{
  /* <Route path="/about" Component={About} /> */
}

const linkStyle = ({ isActive }) =>
  isActive ? { border: "1px solid purple" } : {};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

function BasePage() {
  return (
    <>
      <Header />
      {/* Вбудуй що потрібно */}
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={linkStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => navigate("/"), 2000);
    return () => clearTimeout(id);
  });

  return (
    <div>
      404 This page is not exists yet
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
