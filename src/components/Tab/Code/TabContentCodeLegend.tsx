import React from "react";

import { styled } from "@storybook/theming";

const TabContentCodeLegendWrapper = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-top: 15px;
  padding: 15px;

  p {
    margin: 0;
  }
`;

const TabContentCodeLegendItemWithCoverage = styled.div`
  background: rgb(230, 245, 208);
  margin-top: 10px;
`;

const TabContentCodeLegendItemWithoutCoverage = styled.div`
  background: #f6c6ce;
  margin-top: 10px;
`;

export const TabContentCodeLegend = () => {
  return (
    <div className="App">
      <TabContentCodeLegendWrapper>
        <p>Legendas:</p>
        <TabContentCodeLegendItemWithCoverage>
          Trecho coberto por testes
        </TabContentCodeLegendItemWithCoverage>
        <TabContentCodeLegendItemWithoutCoverage>
          Trecho sem cobertura de teste
        </TabContentCodeLegendItemWithoutCoverage>
      </TabContentCodeLegendWrapper>
    </div>
  );
};
