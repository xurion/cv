import React from 'react';

type GitHubRibbonProps = {
  url: string;
};

const GithubRibbonContainer = ({ children }: React.PropsWithChildren) => (
  <div
    className="
  absolute
  block
  h-[135px]
  overflow-hidden
  right-0
  top-0
  w-[135px]
  z-10
"
  >
    {children}
  </div>
);

const GithubRibbonLink = ({
  className,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...rest}
    className={`
  absolute
  bg-gray-500
  block
  duration-500
  font-bold
  leading-4
  no-underline
  py-1
  right-[-50px]
  rotate-45
  shadow-[4px_4px_10px_rgba(0,0,0,0.8)]
  text-center
  text-[10px]
  text-white
  top-10
  w-[200px]

  hover:bg-gray-400
  hover:color-white
  hover:no-underline

  before:absolute
  before:bg-white
  before:block
  before:content-['']
  before:h-[1px]
  before:left-0
  before:top-[1px]
  before:w-full

  after:absolute
  after:bg-white
  after:block
  after:bottom-[1px]
  after:content-['']
  after:h-[1px]
  after:left-0
  after:top-auto
  after:w-full

  ${className}
`}
  />
);

export const GitHubRibbon = ({ url }: GitHubRibbonProps) => {
  return (
    <GithubRibbonContainer>
      <GithubRibbonLink href={url} target="_blank" rel="noreferrer">
        Fork me on GitHub
      </GithubRibbonLink>
    </GithubRibbonContainer>
  );
};
