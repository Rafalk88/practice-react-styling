import styled, { css } from "styled-components";

const DefaultStyledAlert = styled.div`
  position: relative;
  height: 50px;
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  color: #41464b;
  background-color: #e2e3e5;
  border: 1px solid #d3d6d8;
`;

const variants = {
  primary: css`
    color: #004085;
    background-color: #cce5ff;
    border: 1px solid #b8daff;
  `,
  secondary: css`
    color: #842029;
    background-color: #f8d7da;
    border: 1px solid #f5c2c7;
  `,
};

const StyledAlert = styled(DefaultStyledAlert)(
  ({ variant }) => variants[variant]
);

export { StyledAlert };
