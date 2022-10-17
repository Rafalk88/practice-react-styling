import React from "react";
import { StyledButton } from "./Button.styled";

export const Button = ({ children, variant, size }) => {
  return (
    <StyledButton variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  active: false,
  disabled: false,
};

export default Button;
