import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // чи іде завантаження
  const [error, setError] = useState(null); // помилка при завантаженні

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(({ results }) => setUsers(results))
      .catch(e => setError(e))
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <ul>
      {error && <div style={{ color: "red" }}>ERROR !!!</div>}
      {isFetching && <PacmanLoader color="green" speedMultiplier={1} />}
      {!error &&
        !isFetching &&
        users.map(u => (
          <li key={u.login.uuid}>
            {Object.keys(u).map(key => (
              <p key={key}>
                {key}: {JSON.stringify(u[key])}
              </p>
            ))}
          </li>
        ))}
    </ul>
  );
}

export default UsersList;
