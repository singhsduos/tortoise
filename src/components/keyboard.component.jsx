import { Box, Button, Input } from "@mui/material";
import Context from "../context/context-api";
import React from "react";

const Keyboard = () => {
  const { input, setInput, counter } = React.useContext(Context);

  const handleChange = (e) => {
    setInput(e.target.value.toUpperCase());
  };

  const clearInput = () => {
    setInput("");
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

      <Button
        className="reset-btn"
        onClick={clearInput}
        disabled={counter > 20 ? true : false}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Keyboard;
