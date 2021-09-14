import React, { useMemo } from "react";
import { Subtitle } from "@storybook/components";

import { getStatus } from "../../../utils/coverage";

import {
  Table,
  TableBody,
  TableCol,
  TableHead,
  TableHeadCol,
  TableRow,
} from "../../Table";
import { Text } from "../../Text";

import {
  getDescriptionCoverageFeedback,
  getTitleCoverageFeedback,
} from "./feedbacks";

interface TabContentCoverageTypeProps {
  covered: number;
  pct: number;
  title: string;
  total: number;
}

export const TabContentCoverageType = ({
  covered = 0,
  pct = 0,
  title = "-",
  total = 0,
}: TabContentCoverageTypeProps) => {
  const status = useMemo(() => {
    return getStatus(pct);
  }, [pct]);

  return (
    <>
      <Subtitle>{title}</Subtitle>

      <Table mb={30}>
        <TableHead>
          <TableRow>
            <TableHeadCol>Porcentagem</TableHeadCol>
            <TableHeadCol>Cobertura</TableHeadCol>
            <TableHeadCol>Descrição</TableHeadCol>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow status={status}>
            <TableCol>{`${pct}%`}</TableCol>
            <TableCol>{`${covered} / ${total}`}</TableCol>
            <TableCol>
              <Text fontWeight={500} mb={5}>
                {getTitleCoverageFeedback(status)}
              </Text>
              <Text>{getDescriptionCoverageFeedback(status)}</Text>
            </TableCol>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
