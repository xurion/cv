import { Helmet } from "react-helmet";

type MetaProps = {
  title: string;
};

export const Meta = ({ title }: MetaProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
    </>
  );
};
