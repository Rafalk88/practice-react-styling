import { css } from "styled-components";

export const theme = {
  alert: {
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
  },
  button: {
    primary: css`
      color: #fff;
      background-color: #007bff;
      border-color: 1px solid #007bff;
    `,
    success: css`
      color: #fff;
      background-color: #28a745;
      border-color: 1px solid #28a745;
    `,
    size: {
      sl: css``,
      md: css``,
      lg: css`
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        border-radius: 0.3rem;
      `,
    },
  },
};
