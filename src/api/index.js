import queryString from "query-string";

// TODO move to constants.js
const BASE_URL = "https://randomuser.me/api/";

export const loadUsers = options => {
  const defaultOptions = {
    page: 1,
    results: 10,
    seed: "pe2024",
  };

  const resultsOptions = {
    ...defaultOptions,
    ...options,
  };

  return fetch(`${BASE_URL}?${queryString.stringify(resultsOptions)}`).then(
    response => response.json()
  );
};
