import React from "react";
import { Label } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const DhandaLabel = ({ children, ...restProps }) => (
  <Label {...restProps}>{children}</Label>
);

export default DhandaLabel;
