import { useState } from "react";
import StopWatch from "./components/StopWatch";

function App() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "Show" : "Hide"}
      </button>
      {!isHidden && <StopWatch />}
    </>
  );
}

export default App;
