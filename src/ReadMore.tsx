import React from "react";
import { Button } from "reactstrap";

interface ReadMoreProps {}

interface ReadMoreState {
  show: boolean;
}

export default class ReadMore extends React.Component<
  ReadMoreProps,
  ReadMoreState
> {
  constructor(props: ReadMoreProps) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return this.state.show ? (
      this.props.children
    ) : (
      <Button
        block
        color="primary"
        onClick={() => {
          this.setState({ show: true });
        }}
      >
        Read more
      </Button>
    );
  }
}
