import styled from "styled-components";
import { margin, width } from "./utils";
import theme from "./defaultTheme";

const Label = styled.label`
  ${margin};
  ${width};

  display: inline-block;

  ${({ error }) =>
    error &&
    `
      color: ${theme.colors.danger};
  `}
`;
Label.displayName = "StyledLabel";

export default Label;
