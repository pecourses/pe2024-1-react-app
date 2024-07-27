import { useContext } from "react";
import { UserContext } from "../../contexts";

function UserHeader() {
  const { firstName } = useContext(UserContext);

  return <header>Hello, {firstName}</header>;
}

export default UserHeader;
