import React from 'react'
import {Button} from 'reactstrap'

interface ReadMoreState {
  show: boolean
}

export default class ReadMore extends React.Component<{}, ReadMoreState> {
  constructor() {
    super({});
    this.state = {
      show: false
    }
  }

  render() {
    return this.state.show ? this.props.children : <Button block color="primary" onClick={() => {this.setState({show: true})}}>Read more</Button>
  }
}
