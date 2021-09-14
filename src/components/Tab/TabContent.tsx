import React, { Fragment, useMemo } from "react";
import { Title } from "@storybook/components";

import { TabContentCoverageType } from "./CoverageType";
import { CoverageProps } from "./Tab";

import { getColor, getStatus } from "../../utils/coverage";

import { TabContentCode } from "./Code";
import { Hr } from "../Hr";
import { RadialBar } from "../RadialBar";
import { TabInner, TabWrapper } from "../Tab";

interface TabContentProps {
  code?: string;
  coverage: CoverageProps;
}

export const TabContent: React.FC<TabContentProps> = ({ code, coverage }) => {
  const coverageProps = useMemo(() => {
    return {
      branchesColor: getColor(getStatus(coverage?.branches?.pct)),
      branchesValue: coverage?.branches?.pct,
      functionsColor: getColor(getStatus(coverage?.functions?.pct)),
      functionsValue: coverage?.functions?.pct,
      linesColor: getColor(getStatus(coverage?.lines?.pct)),
      linesValue: coverage?.lines?.pct,
      statementsColor: getColor(getStatus(coverage?.statements?.pct)),
      statementsValue: coverage?.statements?.pct,
    };
  }, [coverage]);

  return (
    <TabWrapper>
      <TabInner>
        <Title>Cobertura de testes</Title>
        <Fragment>
          <RadialBar {...coverageProps} />
        </Fragment>

        <Hr />

        <TabContentCode code={code} />

        <Hr />

        <TabContentCoverageType title="Statements" {...coverage?.statements} />

        <Hr />

        <TabContentCoverageType title="Branches" {...coverage?.branches} />

        <Hr />

        <TabContentCoverageType title="Functions" {...coverage?.functions} />

        <Hr />

        <TabContentCoverageType title="Lines" {...coverage?.lines} />
      </TabInner>
    </TabWrapper>
  );
};
