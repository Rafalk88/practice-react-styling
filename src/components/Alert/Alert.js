import React from "react";
import { StyledAlert } from "./Alert.styled";

const Alert = ({ variant, children }) => (
  <StyledAlert key={variant} variant={variant}>
    {children}
  </StyledAlert>
);

export default Alert;
