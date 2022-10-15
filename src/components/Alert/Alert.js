import React from 'react';

import { StyledAlert } from './Alert.styled';
import { ThemeProvider } from "styled-components";

const theme = {
  color: "#004085",
  backgroundColor: "#cce5ff",
  borderColor: "#b8daff",
};

const Alert = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {["primary"].map((variant) => (
          <StyledAlert key={variant} variant={variant}>
            {props.children}
          </StyledAlert>
        ))}
      </ThemeProvider>
    </>
  );
};

export default Alert;