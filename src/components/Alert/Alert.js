import React from 'react';

import { StyledAlert } from './Alert.styled';
import { ThemeProvider } from "styled-components";

const theme = {
  color: "red",
  backgroundColor: "yellow",
};

const Alert = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledAlert>{props.children}</StyledAlert>
      </ThemeProvider>
    </>
  );
};

export default Alert;