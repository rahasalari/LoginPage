import { useState, useEffect, useRef } from "react";
const Timer = ({ seconds }) => {
  const [countdown, setCountdown] = useState(seconds);

  const timerId = useRef();

  //format time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    if (minutes <= 60) minutes - 0 + minutes;
    if (seconds <= 60) seconds - 0 + seconds;
    const secondToString = seconds.toString();
    return `0${minutes} : ${secondToString.length < 2 ? 0 : ""}${seconds}`;
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown < 0) {
      clearInterval(timerId.current);
    }
  }, [countdown]);

  const timerHandler = () => {
    console.log("1");
    formatTime(countdown);
  };

  return (
    <>
      {countdown > 0 ? (
        <p className="text-xs mt-1 text-gray-400 ">{formatTime(countdown)}</p>
      ) : (
        <p
          className="text-primary text-xs cursor-pointer mt-2 me-9"
          onClick={timerHandler}
        >
          ارسال مجدد کد
        </p>
      )}
    </>
  );
};
export default Timer;
