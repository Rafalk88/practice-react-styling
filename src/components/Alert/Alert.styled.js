import styled from 'styled-components';

const StyledAlert = styled.div`
  display: block;
  height: 50px;
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;

  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
`;

StyledAlert.defaultProps = {
  theme: {
    color: "#41464b",
    backgroundColor: "#e2e3e5",
    borderColor: "#d3d6d8",
  },
};

export { StyledAlert };