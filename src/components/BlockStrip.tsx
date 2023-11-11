import styled from "styled-components";

export const BlockStrip = styled.div`
  border-bottom: 10px solid ${({ theme }) => theme.colour.secondary};
  border-top: 20px solid ${({ theme }) => theme.colour.primary};
  height: 31px;
  margin-bottom: 20px;
`;
