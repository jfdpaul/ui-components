import React from "react";
import { Placeholder } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const DhandaPlaceholder = ({ children, ...restProps }) => (
  <Placeholder {...restProps}>{children}</Placeholder>
);

export default DhandaPlaceholder;
