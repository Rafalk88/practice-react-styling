import React from "react";
import { StyledButton } from "./Button.styled";

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
