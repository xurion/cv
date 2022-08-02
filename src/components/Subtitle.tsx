import React from "react";
import styled from "styled-components";
import { colours, fontSizes } from "../Theme";

const StyledH2 = styled.h2`
  margin-bottom: 0;
`;

const Base = styled.div`
  color: ${colours.secondary};
  font-size: ${fontSizes.h2};
  line-height: 0.5;
  margin-bottom: 1rem;
  opacity: 0.25;
  text-align: center;

  &::before {
    content: "~";
  }
`;

export const Subtitle: React.FC = ({ children }) => {
  return (
    <>
      <StyledH2 className="text-center">{children}</StyledH2>
      <Base />
    </>
  );
};
