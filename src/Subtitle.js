import React, {Component} from 'react'
import './App.scss'

export default class Subtitle extends Component {

  render() {

    return (
      <React.Fragment>
        <h2 className="subtitle-text text-center">{this.props.children}</h2>
        <div className="subtitle-base"/>
      </React.Fragment>
    )
  }
}
