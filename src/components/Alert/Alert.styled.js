import styled from 'styled-components';

const StyledAlert = styled.div`
  display: block;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export { StyledAlert };