import { Helmet } from "react-helmet";

type MetaProps = {
  title: string;
};

const Meta = ({ title }: MetaProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
    </>
  );
};

export default Meta;
