import { styled } from "@storybook/theming";

interface TextProps {
  fontWeight?: 200 | 300 | 400 | 500 | 600 | 700 | 800 | "bold";
  m?: number;
  margin?: number;
  mb?: number;
  marginBottom?: number;
}

export const Text = styled.p<TextProps>`
  font-weight: ${(props) => props.fontWeight || 400};
  margin: ${(props) => props.m || props.margin || 0}px;
  margin-bottom: ${(props) => props.mb || props.marginBottom || 0}px;
`;
