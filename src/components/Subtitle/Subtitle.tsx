import { PropsWithChildren } from 'react';

export const Subtitle = ({ children }: PropsWithChildren) => (
  <>
    <h2 className="font-bold text-center text-2xl">{children}</h2>
    <div className=" leading-3 mb-4 opacity-25 text-center text-secondary text-4xl before:content-['~']" />
  </>
);
