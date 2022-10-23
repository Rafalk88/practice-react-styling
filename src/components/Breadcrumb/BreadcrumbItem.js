import { StyledBreadcrumbItem } from "./BreadcrumbItem.styled";
import * as React from "react";

const BreadcrumbItem = (props) => {
  return (
    <StyledBreadcrumbItem>
      <a href={props.href} role="button">
        {props.children}
      </a>
    </StyledBreadcrumbItem>
  );
};

BreadcrumbItem.defaultProps = {
  active: false,
  linkProps: {},
};

export default BreadcrumbItem;
