import { useState } from "react";
import CategoriesList from "./components/CategoriesList";
import NavLinks from "./components/NavLinks";

const NAV_LINK = {
  icon: "/icons/learn.svg",
  menuItem: "Навчання",
  link: "#",
  hasNotifications: false,
  isActive: false,
};

function App() {
  const [navLink, setNavLink] = useState(NAV_LINK);

  return (
    <>
      {/* <NavLinks /> */}
      <NavLink navLink={navLink} setNavLink={setNavLink} />
    </>
  );
}

export default App;

function NavLink({ navLink, setNavLink }) {
  const linkStyle = {
    border: navLink.isActive ? "5px solid blue" : "",
  };

  function changeActive() {
    // navLink.isActive = !navLink.isActive

    // STATE is IMMUTABLE
    const navLinkCopy = { ...navLink };
    navLinkCopy.isActive = !navLinkCopy.isActive;
    setNavLink(navLinkCopy);
  }

  return (
    <div key={navLink.icon}>
      <a onClick={changeActive} style={linkStyle} href={navLink.link}>
        <img src={navLink.icon} /> {navLink.menuItem}
      </a>
    </div>
  );
}
