import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { loadUsers } from "../../../api";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // чи іде завантаження
  const [error, setError] = useState(null); // помилка при завантаженні
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(10);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    loadUsers({ currentPage, results })
      .then(({ results }) => setUsers(results))
      .catch(e => setError(e))
      .finally(() => setIsFetching(false));
  }, [currentPage]);

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(page => page - 1);
    }
  };
  const goNextPage = () => {
    setCurrentPage(page => page + 1);
  };

  return (
    <>
      <div>
        <button onClick={goPrevPage} disabled={currentPage === 1}>
          {"<"}
        </button>
        <button onClick={goNextPage}>{">"}</button>
      </div>
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
    </>
  );
}

export default UsersList;
