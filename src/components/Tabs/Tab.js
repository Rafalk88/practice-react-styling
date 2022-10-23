import * as React from "react";
import TabContent from "./TabContent";
import { StyledTab } from "./Tab.styled";

const Tab = (props) => {
  return (
    <>
      <StyledTab>{props.children}</StyledTab>
    </>
  );
};

export default Tab;
