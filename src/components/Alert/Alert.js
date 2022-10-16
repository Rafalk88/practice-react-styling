import React from 'react';

import { StyledAlert } from "./Alert.styled";

const Alert = (props) => {
  return (
    <>
      {["primary"].map((variant) => (
        <StyledAlert key={variant} variant={variant}>
          {props.children}
        </StyledAlert>
      ))}
    </>
  );
};

export default Alert;