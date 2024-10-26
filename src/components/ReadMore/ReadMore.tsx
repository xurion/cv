import { PropsWithChildren, useCallback, useState } from 'react';

export const ReadMore = ({ children }: PropsWithChildren) => {
  const [show, setShow] = useState(false);
  const onClick = useCallback(() => setShow(true), [setShow]);

  return show ? (
    <>{children}</>
  ) : (
    <button
      className=" bg-primary block duration-150 px-3 py-2 rounded text-white w-full hover:bg-primary-dark"
      onClick={onClick}
    >
      Read more
    </button>
  );
};
