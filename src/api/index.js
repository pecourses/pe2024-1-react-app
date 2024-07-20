import queryString from "query-string";

// TODO move to constants.js
const BASE_URL = "https://randomuser.me/api/";

export const loadUsers = options => {
  const defaultOptions = {
    page: 1,
    results: 10,
    seed: "pe2024",
    inc: ["name", "gender", "login"],
  };

  const resultsOptions = {
    ...defaultOptions,
    ...options,
  };
  // arrayFormat: "comma", означає, що з елементи масиву
  //              перетворяться на значення, розділені комою:
  //              inc: ["name", "gender", "login"] => 'inc=name,gender,login'
  // Джерело: https://www.npmjs.com/package/query-string#arrayformat-1
  return fetch(
    `${BASE_URL}?${queryString.stringify(resultsOptions, {
      arrayFormat: "comma",
    })}`
  ).then(response => response.json());
};
