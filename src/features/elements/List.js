import React from "react";
import { List } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const DhandaList = ({ children, ...restProps }) => (
  <List {...restProps}>{children}</List>
);

export default DhandaList;
