import styled from "styled-components";

type GithubRibbonProps = {
  url: string;
};

const GithubRibbonContainer = styled.div`
  display: block;
  height: 135px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 135px;
  z-index: 9999;
`;

const GithubRibbonLink = styled.a`
  background: #666;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  line-height: 15px;
  padding: 4px 0;
  position: absolute;
  right: -50px;
  text-align: center;
  text-decoration: none;
  top: 40px;
  transform: rotate(45deg);
  transition: 0.5s;
  width: 200px;

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

export const GithubRibbon = (props: GithubRibbonProps) => {
  return (
    <GithubRibbonContainer>
      <GithubRibbonLink href={props.url} target="_blank" rel="noreferrer">
        Fork me on GitHub
      </GithubRibbonLink>
    </GithubRibbonContainer>
  );
};
