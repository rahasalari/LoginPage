import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(180); // 3 minutes in seconds
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, time]);

  const restartTimer = () => {
    setTime(180);
    setIsActive(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      {time === 0 ? (
        <button
          className="text-primary text-xs cursor-pointer mt-2 me-9"
          onClick={restartTimer}
        >
          ارسال مجدد کد
        </button>
      ) : (
        <div className="text-xs mt-1 text-gray-400 ">{formatTime(time)}</div>
      )}
    </div>
  );
}

export default Timer;
