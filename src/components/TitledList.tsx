import { NestedStringArray } from "../types";
import List from "./List";

type TitledListProps = {
  title: string;
  points: NestedStringArray;
};

const TitledList = (props: TitledListProps) => {
  return (
    <>
      <p>{props.title}</p>
      <List points={props.points} />
    </>
  );
};

export default TitledList;
