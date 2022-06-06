import React from "react";
import Context from "./context-api";

const Provider = (props) => {
  const [alpha, setAlpha] = React.useState("");
  const [bestTime, setBestTime] = React.useState(0.0);
  const [counter, setCounter] = React.useState(0);
  const [input, setInput] = React.useState("");
  const [msg, setMessage] = React.useState("");
  const [playTime, setPlayTime] = React.useState("");
  const [penaltyCounter, setPenaltyCounter] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const [startTime, setStartTime] = React.useState(Date.now());
  const [timer, setTimer] = React.useState(0.0);

  return (
    <Context.Provider
      value={{
        alpha,
        bestTime,
        counter,
        input,
        msg,
        playTime,
        penaltyCounter,
        running,
        startTime,
        timer,
        setAlpha: (alpha) => setAlpha(alpha),
        setBestTime: (bestTime) => setBestTime(bestTime),
        setCounter: (counter) => setCounter(counter),
        setInput: (input) => setInput(input),
        setMessage: (msg) => setMessage(msg),
        setPlayTime: (playTime) => setPlayTime(playTime),
        setRunning: (running) => setRunning(running),
        setPenaltyCounter: (penaltyCounter) =>
          setPenaltyCounter(penaltyCounter),
        setStartTime: (startTime) => setStartTime(startTime),
        setTimer: (timer) => setTimer(timer),
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
