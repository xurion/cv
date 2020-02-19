import React from "react";

interface ListProps {
  points: string[];
}

export default (props: ListProps) => {
  return (
    <ul>
      {props.points.map((point, key) => (
        <li key={key}>{point}</li>
      ))}
    </ul>
  );
};
