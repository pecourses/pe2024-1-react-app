import { useContext } from "react";
import { ThemeContext, UserContext } from "../../contexts";
import CONSTANTS from "./../../constants";

const { LIGHT, DARK, BLUE } = CONSTANTS.THEMES;

function UserHeader() {
  const { firstName } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = ({ target: { value } }) => setTheme(value);

  return (
    <header>
      {theme} Hello, {firstName}
      <select value={theme} onChange={changeTheme}>
        <option value={LIGHT}>Light</option>
        <option value={DARK}>Dark</option>
        <option value={BLUE}>Blue</option>
      </select>
    </header>
  );
}

export default UserHeader;
