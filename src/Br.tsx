import React from "react";

type BrProps = {
  className?: string;
};

export default (props: BrProps) => {
  let className = "br";
  className = props.className ? `${className} ${props.className}` : className;

  return <br className={className} />;
};
