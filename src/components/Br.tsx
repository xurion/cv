import styled from "styled-components";
import { colours, sectionSpacing } from "../Theme";

type Props = {};

const Br = styled.br<Props>`
  background: ${colours.secondary};
  content: " ";
  display: block;
  height: 2px;
  margin: ${sectionSpacing} 0;
`;

export default Br;
