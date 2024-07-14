import { useState } from "react";
import styles from "./LoginForm.module.css";
import classNames from "classnames";

const LOGIN_FORM_REG_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
};

// email, password
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    // send request
    console.log("send >>", { email, password });
    // clear form
    setEmail("");
    setPassword("");
  };

  const inputEmailClassName = classNames(styles.formInput, {
    [styles.validInput]: LOGIN_FORM_REG_EXP.email.test(email),
    [styles.invalidInput]: !LOGIN_FORM_REG_EXP.email.test(email),
  });

  const inputPasswordClassName = classNames(styles.formInput, {
    [styles.validInput]: LOGIN_FORM_REG_EXP.password.test(password),
    [styles.invalidInput]: !LOGIN_FORM_REG_EXP.password.test(password),
  });

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login Form</h2>
      <form className={styles.loginForm} onSubmit={handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Email: </span>
          <input
            className={inputEmailClassName}
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="yourmail@mail"
            autoFocus
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Password: </span>
          <input
            className={inputPasswordClassName}
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className={styles.submitBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
