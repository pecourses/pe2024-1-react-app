import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { loadUsers } from "../../../api";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // чи іде завантаження
  const [error, setError] = useState(null); // помилка при завантаженні
  // TODO: rename to page
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(10);

  useEffect(() => {
    const savedPage = Number(window.localStorage.getItem("page"));
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  // працює без <React.StrictMode>
  useEffect(() => {
    window.localStorage.setItem("page", currentPage);
  }, [currentPage]);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    loadUsers({ page: currentPage, results })
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
        <span>{currentPage}</span>
        <button onClick={goNextPage}>{">"}</button>
      </div>{" "}
      {error && <div style={{ color: "red" }}>ERROR !!!</div>}
      {isFetching && <PacmanLoader color="green" speedMultiplier={1} />}
      <ul>
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
