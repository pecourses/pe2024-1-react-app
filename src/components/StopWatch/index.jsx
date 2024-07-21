import { addSeconds, format } from "date-fns";
import { useEffect, useState } from "react";

function StopWatch() {
  const [timer, setTimer] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const handleStartStop = () => {
    if (!isRunning) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

  const tick = () => {
    setTimer(prevTimer => {
      const newTimer = new Date(prevTimer.valueOf());
      return addSeconds(newTimer, 1);
    });
  };

  const reset = () => {
    setTimer(new Date(0, 0, 0, 0, 0, 0, 0));
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
  console.log("timer :>> ", timer);
  return (
    <div>
      {format(timer, "mm:ss")}
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
