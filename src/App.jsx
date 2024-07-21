import { useState } from "react";
import ViewPortParams from "./components/VeiwPortParams";

function App() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "Show" : "Hide"}
      </button>
      {!isHidden && <ViewPortParams />}
    </>
  );
}

export default App;
