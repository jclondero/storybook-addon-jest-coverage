import React from "react";

import { Subtitle } from "@storybook/components";
import { format } from "react-string-format";

import { TabContentCodeLegend } from "./TabContentCodeLegend";
import { TabContentCodeStyled } from "./TabContentCodeStyled";

interface TabContentCodeProps {
  code?: string;
}

const code = `<p>Não foi possível carregar esse trecho! Tente gerar a cobertura de testes novamente.</p>`;

export const TabContentCode = ({
  code: __html = format(code),
}: TabContentCodeProps) => {
  return (
    <>
      <Subtitle>Code</Subtitle>

      <TabContentCodeStyled dangerouslySetInnerHTML={{ __html }} />

      <TabContentCodeLegend />
    </>
  );
};
