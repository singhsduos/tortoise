import { Box } from "@mui/material";
import Context from "../context/context-api";
import React from "react";

const TimerBox = () => {
  const {
    bestTime,
    counter,
    playTime,
    running,
    setBestTime,
    startTime,
    setTimer,
    timer,
  } = React.useContext(Context);

  React.useEffect(() => {
    let interval = setInterval(() => {
      let elapsedTime = Date.now() - startTime;
      let net = (elapsedTime / 1000).toFixed(3);
      setTimer(net);
    }, 1);

    const getBestTime = localStorage.getItem("bestTime");
    if (getBestTime !== null) {
      setBestTime(getBestTime);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <Box className="timer-box">
      <h5 className="timer-text">Time: {counter > 20 ? playTime : timer}s</h5>
      <h6 className="timer-text">my best time: {bestTime}s!</h6>
    </Box>
  );
};

export default TimerBox;
