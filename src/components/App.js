import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeProvider, css } from "styled-components";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";

const theme = {
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

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container fluid>
          <Row>
            <Col>
              <h2>Komponenty React Boostrap</h2>
            </Col>
            <Col>
              <h2>Komponenty Twoje</h2>
            </Col>
          </Row>
          <Task01 />
          <Task02 />
          <Task03 />
          <Task04 />
          <Task05 />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;