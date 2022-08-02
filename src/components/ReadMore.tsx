import React, { useState } from "react";
import { Button } from "reactstrap";

export const ReadMore: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);

  return show ? (
    <>{children}</>
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
