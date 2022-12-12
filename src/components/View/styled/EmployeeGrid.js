import styled from "styled-components";
import { margin } from "../../styled/utils";

const EmployeeGrid = styled.div`
  ${margin}

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export default EmployeeGrid;
