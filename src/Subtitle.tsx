import React, { FC } from "react";

const Subtitle: FC = (props) => {
  return (
    <>
      <h2 className="subtitle-text text-center">{props.children}</h2>
      <div className="subtitle-base" />
    </>
  );
};

export default Subtitle;
