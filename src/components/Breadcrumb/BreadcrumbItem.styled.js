import Styled from "styled-components";

export const StyledBreadcrumbItem = Styled.li`
  padding-left: 0.5rem;
  
  &::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
`;
