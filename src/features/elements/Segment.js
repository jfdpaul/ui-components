import React from "react";
import { Segment } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const DhandaSegment = ({ children, ...restProps }) => (
  <Segment {...restProps}>{children}</Segment>
);

export default DhandaSegment;
