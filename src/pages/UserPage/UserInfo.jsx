import { useContext } from "react";
import { UserContext } from "../../contexts";

function UserInfo() {
  const { firstName, lastName, userSrc } = useContext(UserContext);

  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      <img src={userSrc} alt={firstName} />
    </div>
  );
}
export default UserInfo;
