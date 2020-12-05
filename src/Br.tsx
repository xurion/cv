import React from "react";

interface BrProps {
  className?: string;
}

const Br = (props: BrProps) => {
  let className = "br";
  className = props.className ? `${className} ${props.className}` : className;

  return <br className={className} />;
};

export default Br;
