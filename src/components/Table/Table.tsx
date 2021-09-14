import { styled } from "@storybook/theming";

interface TableProps {
  mb?: number;
  marginBottom?: number;
  mt?: number;
  marginTop?: number;
}

export const Table = styled.table<TableProps>`
  display: block;
  width: 100%;
  margin: 0px 0px 16px;
  overflow: auto;
  border-collapse: collapse;
  margin-bottom: ${({ marginBottom, mb }) => mb || marginBottom || 0}px;
`;
