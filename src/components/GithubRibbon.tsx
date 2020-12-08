import React from "react";

type GithubRibbonProps = {
  githubUrl: string;
  imgSrc: string;
  imgAlt: string;
};

const GithubRibbon = (props: GithubRibbonProps) => {
  return (
    <a href={props.githubUrl}>
      <img
        style={{ position: "absolute", top: 0, right: 0, border: 0 }}
        src={props.imgSrc}
        alt={props.imgAlt}
      />
    </a>
  );
};

export default GithubRibbon;
