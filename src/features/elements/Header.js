import React from "react";
import { Header } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const DhandaHeader = ({ children, ...restProps }) => (
  <Header {...restProps}>{children}</Header>
);

export default DhandaHeader;
