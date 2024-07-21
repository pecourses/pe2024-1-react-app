import { useEffect, useState } from "react";

function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartStop = () => {
    if (!isRunning) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

  const tick = () => {
    setTimer(timer => timer + 1);
  };

  const reset = () => {
    setTimer(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let id = null;
    if (isRunning) {
      id = setTimeout(tick, 1000);
    }
    return () => {
      clearInterval(id);
    };
  });

  return (
    <div>
      {timer}
      <div>
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
