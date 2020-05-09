import React from "react";
import { Message } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const UiMessage = ({ children, ...restProps }) => (
  <Message {...restProps}>{children}</Message>
);

export default UiMessage;
