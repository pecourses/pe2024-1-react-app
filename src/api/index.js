export const loadUsers = options => {
  const defaultOptions = {
    currentPage: 1,
    results: 10,
  };

  const resultsOptions = {
    ...defaultOptions,
    ...options,
  };

  const { currentPage, results } = resultsOptions;

  return fetch(
    `https://randomuser.me/api/?page=${currentPage}&results=${results}&seed=pe2024`
  ).then(response => response.json());
};

// currentPage: 1,
// // results: 10,
// results: 20
