import { useState } from "react";
import { UserContext } from "./contexts";
import UserPage from "./pages/UserPage";
function App() {
  const [user, setUser] = useState({
    userSrc:
      "https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-LinkedIn.jpg",
    firstName: "Test",
    lastName: "Testovich",
  });

  return (
    <UserContext.Provider value={user}>
      <UserPage />
    </UserContext.Provider>
  );
}
export default App;
