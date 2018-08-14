import React, {Component} from 'react'
import './App.scss'

export default class Title extends Component {

  render() {

    return <h1 className="text-center">{this.props.children}</h1>
  }
}
