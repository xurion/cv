import styled from "styled-components";

export const Br = styled.br`
  background: ${({ theme }) => theme.colour.secondary};
  content: " ";
  display: block;
  height: 2px;
  margin: ${({ theme }) => theme.spacing} 0;
`;
