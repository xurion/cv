import React from "react";
import List from "./List";

type TitledListProps = {
  title: string;
  points: string[];
};

export default (props: TitledListProps) => {
  return (
    <>
      <p>{props.title}</p>
      <List points={props.points} />
    </>
  );
};
