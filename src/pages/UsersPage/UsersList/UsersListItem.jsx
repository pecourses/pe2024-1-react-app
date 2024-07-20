function UsersListItem({ user: u }) {
  return (
    <li key={u.login.uuid}>
      {Object.keys(u).map(key => (
        <p key={key}>
          {key}:{" "}
          {u[key] instanceof Object ? (
            <ul>
              {Object.keys(u[key]).map(ukey => (
                <li key={key + ukey}>
                  {ukey}: {JSON.stringify(u[key][ukey])}
                </li>
              ))}
            </ul>
          ) : (
            <span>{JSON.stringify(u[key])}</span>
          )}
        </p>
      ))}
    </li>
  );
}

export default UsersListItem;
