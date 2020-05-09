import React from "react";
import { Button } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const DhandaButton = ({ children, ...restProps }) => (
  <Button {...restProps}>{children}</Button>
);

export default DhandaButton;
