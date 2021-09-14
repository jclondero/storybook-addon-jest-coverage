import React from "react";
import { useParameter } from "@storybook/api";

import { PARAM_KEY } from "../../constants";

import { TabContent } from "./TabContent";

export interface CoverageProps {
  options: {
    minimum?: number;
    recommended?: number;
  };
  lines: {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
  };
  functions: {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
  };
  statements: {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
  };
  branches: {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
  };
}

interface TabProps {
  active: boolean;
}

export const Tab: React.FC<TabProps> = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const coverage = useParameter<CoverageProps>(PARAM_KEY, null);

  if (!active) {
    return null;
  }

  return <TabContent coverage={coverage} />;
};
