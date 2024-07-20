import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { loadUsers } from "../../../api";
import UsersListItem from "./UsersListItem";

function UsersList({ fieldsFilter }) {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // чи іде завантаження
  const [error, setError] = useState(null); // помилка при завантаженні
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(10);

  useEffect(() => {
    const savedPage = Number(window.localStorage.getItem("page"));
    if (savedPage) {
      setPage(savedPage);
    }
  }, []);

  // працює без <React.StrictMode>
  useEffect(() => {
    window.localStorage.setItem("page", page);
  }, [page]);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    // список полів для завантаження також передаємо в запит
    loadUsers({ page, results, inc: fieldsFilter })
      .then(({ results }) => setUsers(results))
      .catch(e => setError(e))
      .finally(() => setIsFetching(false));
  }, [page, fieldsFilter]);

  const goPrevPage = () => {
    if (page > 1) {
      setPage(page => page - 1);
    }
  };
  const goNextPage = () => {
    setPage(page => page + 1);
  };

  return (
    <>
      <div>
        <button onClick={goPrevPage} disabled={page === 1}>
          {"<"}
        </button>
        <span> {page} </span>
        <button onClick={goNextPage}>{">"}</button>
      </div>
      {error && <div style={{ color: "red" }}>ERROR !!!</div>}
      {isFetching && <PacmanLoader color="green" speedMultiplier={1} />}
      <ul>
        {!error && !isFetching && users.map(u => <UsersListItem user={u} />)}
      </ul>
    </>
  );
}

export default UsersList;
