const CONSTANTS = {
  // можливі значення для формування параметра рядка запиту:
  // вигляду "https://randomuser.me/api/?inc=gender,name,nat"
  // Джерело (розділ Including/Excluding fields):
  //          https://randomuser.me/documentation
  USER_FIELDS: [
    { fieldName: "gender", caption: "Gender" },
    { fieldName: "name", caption: "Name" },
    { fieldName: "location", caption: "Location" },
    { fieldName: "email", caption: "Email" },
    // { fieldName: "login", caption: "Login" }, // це обов'язкове, воно для ключа
    { fieldName: "registered", caption: "Registered" },
    { fieldName: "dob", caption: "Date Of Birth" },
    { fieldName: "phone", caption: "Phone Number" },
    { fieldName: "cell", caption: "Cell Number" },
    { fieldName: "id", caption: "ID" },
    { fieldName: "picture", caption: "Profile Photos" },
    { fieldName: "nat", caption: "Nationality" },
  ],
};

export default CONSTANTS;
