import styled from "styled-components";
import { colours, sectionSpacing } from "../Theme";

const Br = styled.br`
  background: ${colours.secondary};
  content: " ";
  display: block;
  height: 2px;
  margin: ${sectionSpacing} 0;
`;

export default Br;
