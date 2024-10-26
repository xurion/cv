import { ImgHTMLAttributes } from 'react';

export const Portrait = ({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    className={`duration-1000 grayscale rounded-full hover:grayscale-0${className ? ` ${className}` : ''}`}
    {...props}
  />
);
