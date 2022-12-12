import styled from "styled-components";
import theme from "../../styled/defaultTheme";
import { width } from "../../styled/utils";

const EmployeeCard = styled.div`
  ${width}

  padding: ${theme.spacings.md};
`;

export default EmployeeCard;
