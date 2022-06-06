import { Box, Button, Input } from "@mui/material";
import Context from "../context/context-api";
import React from "react";

const Keyboard = () => {
  const {
    input,
    counter,
    running,
    setCounter,
    setInput,
    setPenaltyCounter,
    setPlayTime,
    setRunning,
    setStartTime,
    setTimer,
  } = React.useContext(Context);

  const handleChange = (e) => {
    setInput(e.target.value.toUpperCase());
  };

  const resetGame = () => {
    setInput("");
    setTimer(0);
    setCounter(0);
    setPlayTime(0);
    setPenaltyCounter(0);
    setRunning(!running);
    setStartTime(Date.now());
  };

  return (
    <Box className="keyboard-box">
      <Input
        disableUnderline
        className="text-field"
        id="filled-hidden-label-normal"
        value={input}
        variant="filled"
        autoFocus
        placeholder="Type here"
        onChange={handleChange}
        disabled={counter > 20 ? true : false}
      />

      <Button className="reset-btn" onClick={resetGame}>
        Reset
      </Button>
    </Box>
  );
};

export default Keyboard;
