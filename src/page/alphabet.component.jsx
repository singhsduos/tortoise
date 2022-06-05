import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import TextBox from "../components/text-box.component";
import Heading from "../components/heading.component";
import TimerBox from "../components/timer.component";
import Keyboard from "../components/keyboard.component";

export const Alphabet = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#0e0e52",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flexStart",
            textAlign: "center",
          }}
        >
          <Heading />
          <TextBox />
          <TimerBox />
          <Keyboard />
        </Box>
      </Container>
    </>
  );
};
