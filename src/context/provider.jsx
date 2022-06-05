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
        timer,
        setAlpha: (alpha) => setAlpha(alpha),
        setBestTime: (bestTime) => setBestTime(bestTime),
        setCounter: (counter) => setCounter(counter),
        setTimer: (timer) => setTimer(timer),
        setInput: (input) => setInput(input),
        setMessage: (msg) => setMessage(msg),
        setPlayTime: (playTime) => setPlayTime(playTime),
        setPenaltyCounter: (penaltyCounter) =>
          setPenaltyCounter(penaltyCounter),
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
