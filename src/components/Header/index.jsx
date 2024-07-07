import logoImg from "./logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <img className={styles.logoImg} src={logoImg} alt="" />
    </header>
  );
}

export default Header;
