import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../../features/elements/Button";

storiesOf("Button", module)
  .add("active with no fill", () => (
    <Button basic >Label</Button>
  ))
  .add("active with fill", () => (
    <Button active={true}>Sign Up</Button>
  ))
  .add("disabled", () => <Button content="Continue" disabled={false} />)
  .add("primary", () => <Button content="Primary" primary/>)
  .add("secondary", () => <Button content="Secondary" secondary />);
