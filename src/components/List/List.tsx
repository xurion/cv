import { NestedStringArray } from '../../types';

type ListProps = {
  points: NestedStringArray;
};

type SubListProps = {
  points: string[];
};

const SubList = (props: SubListProps) => (
  <ul className="list-[circle] list-inside ml-4">
    {props.points.map((point, key) => (
      <li key={key.toString()}>{point}</li>
    ))}
  </ul>
);

export const List = (props: ListProps) => (
  <ul className="list-disc list-inside ml-4">
    {props.points.map((point, key) => {
      return (
        typeof point === 'string' && (
          <li key={key.toString()}>
            {point}
            {Array.isArray(props.points[key + 1]) && (
              <SubList points={props.points[key + 1] as string[]} />
            )}
          </li>
        )
      );
    })}
  </ul>
);
