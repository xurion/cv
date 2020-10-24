import React, { FC, useState } from "react";
import { Button } from "reactstrap";

const ReadMore: FC = (props) => {
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
