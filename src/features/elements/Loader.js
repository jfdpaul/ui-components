import React from "react";
import { Loader } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const DhandaLoader = ({ children, ...restProps }) => (
  <Loader {...restProps}>{children}</Loader>
);

export default DhandaLoader;
