import React from "react";

import { Button } from "./Button";

const coverage = {
  options: {
    minimum: 70,
    recommended: 85,
  },
  lines: {
    total: 2,
    covered: 2,
    skipped: 0,
    pct: 100,
  },
  functions: {
    total: 1,
    covered: 1,
    skipped: 0,
    pct: 50,
  },
  statements: {
    total: 2,
    covered: 2,
    skipped: 0,
    pct: 100,
  },
  branches: {
    total: 0,
    covered: 0,
    skipped: 0,
    pct: 100,
  },
};

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    coverage,
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
