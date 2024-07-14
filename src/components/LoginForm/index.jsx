import { useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [value, setValue] = useState("name");

  const handleInputChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
}

export default LoginForm;
