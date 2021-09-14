import { styled } from "@storybook/theming";

import { getColor, statusProps } from "../../utils/coverage";

interface TableRowProps {
  status?: statusProps;
}

export const TableRow = styled.tr<TableRowProps>`
  background-color: ${({ status }) =>
    status ? `${getColor(status)}22` : "rgb(255, 255, 255)"};
  border-top: 1px solid rgb(225, 228, 232);

  &:nth-child(2n) {
    background-color: rgb(246, 248, 250);
  }
`;
