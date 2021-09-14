// @ts-nocheck
import React from "react";
import ReactApexChart from "react-apexcharts";

import { defaultOptionsChart } from "./utils";

interface RadialBarProps {
  branchesColor: string;
  branchesValue: number;
  functionsColor: string;
  functionsValue: number;
  linesColor: string;
  linesValue: number;
  statementsColor: string;
  statementsValue: number;
}

export const RadialBar = ({
  branchesColor,
  branchesValue,
  functionsColor,
  functionsValue,
  linesColor,
  linesValue,
  statementsColor,
  statementsValue,
}: RadialBarProps) => {
  const chartProps = {
    ...defaultOptionsChart,
    series: [statementsValue, branchesValue, functionsValue, linesValue],
    options: {
      ...defaultOptionsChart.options,
      colors: [statementsColor, branchesColor, functionsColor, linesColor],
    },
  };

  return (
    <ReactApexChart
      options={chartProps.options}
      series={chartProps.series}
      type="radialBar"
      height={390}
    />
  );
};
