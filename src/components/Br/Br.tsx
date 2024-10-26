import { HTMLAttributes } from 'react';

export const Br = ({
  className = '',
  ...props
}: HTMLAttributes<HTMLBRElement>) => (
  <br
    className={`bg-secondary block content-empty h-[2px] my-6${className ? ` ${className}` : ''}`}
    {...props}
  />
);
