import React from "react";
import { Box, TextField } from "@mui/material";
import Context from "../context/context-api";
import "./alphabet.style.css";

const TextBox = () => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const {
    alpha,
    setAlpha,
    input,
    timer,
    msg,
    counter,
    setCounter,
    setPlayTime,
    penaltyCounter,
    setBestTime,
    setMessage,
    setPenaltyCounter,
  } = React.useContext(Context);

  React.useEffect(() => {
    const lastInputChar = input.charAt(input.length - 1);

    if (lastInputChar === alpha) {
      const arr = alphabet[Math.floor(Math.random() * alphabet.length)];
      setAlpha(arr);
      setCounter(counter + 1);
    } else if (lastInputChar !== alpha) {
      setPenaltyCounter(penaltyCounter + 1);
    }

    if (counter === 20) {
      setPlayTime(parseFloat(timer) + penaltyCounter * 0.5);
      localStorage.setItem(
        "currentTime",
        JSON.stringify(parseFloat(timer) + penaltyCounter * 0.5)
      );
    }

    if (counter === 20) {
      const bestTime = localStorage.getItem("bestTime");
      if (bestTime === null) {
        localStorage.setItem(
          "bestTime",
          JSON.stringify(parseFloat(timer) + penaltyCounter * 0.5)
        );
        setBestTime(parseFloat(timer) + penaltyCounter * 0.5);
        setMessage("Success!");
      } else if (
        parseFloat(timer) + penaltyCounter * 0.5 <
        parseFloat(bestTime)
      ) {
        localStorage.setItem(
          "bestTime",
          JSON.stringify(parseFloat(timer) + penaltyCounter * 0.5)
        );
        setBestTime(parseFloat(timer) + penaltyCounter * 0.5);
        setMessage("Success!");
      } else if (
        parseFloat(timer) + penaltyCounter * 0.5 >
        parseFloat(bestTime)
      ) {
        setMessage("Failure!");
      }
    }
  }, [input]);

  return (
    <Box
      sx={{ bgcolor: "#ffffff", height: "30%", borderRadius: "10px" }}
      className="alphabet-box"
    >
      <TextField
        className="alphabet-text-field"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
        }}
        variant="filled"
        value={counter > 20 ? msg : alpha}
      />
    </Box>
  );
};

export default TextBox;
