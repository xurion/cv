import React, { useState } from "react";
import { Button } from "reactstrap";

type ReadMoreProps = {
  children: React.ReactNode;
};

const ReadMore = (props: ReadMoreProps) => {
  const [show, setShow] = useState(false);

  return show ? (
    <>{props.children}</>
  ) : (
    <Button
      block
      color="primary"
      onClick={() => {
        setShow(true);
      }}
    >
      Read more
    </Button>
  );
};

export default ReadMore;
