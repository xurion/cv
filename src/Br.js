import React, {Component} from 'react'

export default class Br extends Component {
  render() {
    let className = 'br'
    className = this.props.className ? `${className} ${this.props.className}` : className
    return (
      <br className={className}/>
    )
  }
}
