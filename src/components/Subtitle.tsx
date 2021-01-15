import React from "react";

type SubtitleProps = {
  children: React.ReactNode;
};
const Subtitle = (props: SubtitleProps) => {
  return (
    <>
      <h2 className="subtitle-text text-center">{props.children}</h2>
      <div className="subtitle-base" />
    </>
  );
};

export default Subtitle;
