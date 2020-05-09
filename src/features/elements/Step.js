import React from "react";
import { Step } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const DhandaStep = ({ children, ...restProps }) => (
  <Step {...restProps}>{children}</Step>
);

export default DhandaStep;
