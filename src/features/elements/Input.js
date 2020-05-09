import React from "react";
import { Input } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const DhandaInput = ({ children, ...restProps }) => (
  <Input {...restProps}>{children}</Input>
);

export default DhandaInput;
