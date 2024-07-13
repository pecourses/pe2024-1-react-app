import classNames from "classnames";
import styles from "./NavLinks.module.css";

function NavLink({ navLink: nl, linkIndex, changeActiveLink }) {
  const linkClassName = classNames(styles.navLink, {
    [styles.activeNavLink]: nl.isActive,
  });

  const linkClickHandler = () => {
    changeActiveLink(linkIndex);
  };

  return (
    <li>
      <a onClick={linkClickHandler} className={linkClassName} href={nl.link}>
        <img className={styles.navImg} src={nl.icon} /> {nl.menuItem}
      </a>
    </li>
  );
}

export default NavLink;
