import React from "react";
import styled from "styled-components";

type GithubRibbonProps = {
  url: string;
};

const GithubRibbonContainer = styled.div`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9999;
`;

const GithubRibbonLink = styled.a`
  background: #666;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 40px;
  position: absolute;
  right: -70px;
  text-align: center;
  text-decoration: none;
  top: 50px;
  transform: rotate(45deg);
  transition: 0.5s;
  width: 275px;

  &:hover {
    background: #777;
    color: #fff;
    text-decoration: none;
  }

  &::before,
  &::after {
    background: #fff;
    content: "";
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 100%;
  }

  &::after {
    bottom: 1px;
    top: auto;
  }
`;

const GithubRibbon = (props: GithubRibbonProps) => {
  return (
    <GithubRibbonContainer>
      <GithubRibbonLink href={props.url}>Fork me on GitHub</GithubRibbonLink>
    </GithubRibbonContainer>
  );
};

export default GithubRibbon;
