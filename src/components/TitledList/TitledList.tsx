import { NestedStringArray } from '../../types';
import { List } from '../List';

type TitledListProps = {
  title: string;
  points: NestedStringArray;
};

export const TitledList = (props: TitledListProps) => {
  return (
    <>
      <p>{props.title}</p>
      <List points={props.points} />
    </>
  );
};
