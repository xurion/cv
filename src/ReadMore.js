import React, {Component} from 'react'
import styles from './App.scss'
import {Button} from 'reactstrap'

export default class ReadMore extends Component {

  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  render() {
    return this.state.show ? this.props.children : <Button cssModule={styles} block color="primary" onClick={() => {this.setState({show: true})}}>Read more</Button>
  }
}
