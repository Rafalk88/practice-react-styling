import styled from "styled-components";

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

const StyledAlert = styled(DefaultStyledAlert)(
  ({ theme, variant }) => theme.alert[variant]
);

export { StyledAlert };
