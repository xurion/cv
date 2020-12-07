import React from "react";

type ListProps = {
  points: string[];
};

const List = (props: ListProps) => {
  return (
    <ul>
      {props.points.map((point, key) => (
        <li key={key.toString()}>{point}</li>
      ))}
    </ul>
  );
};

export default List;
