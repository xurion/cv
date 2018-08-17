import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
  render() {
    return (
      <ul>
        {this.props.points.map((point, key) => <li key={key}>{point}</li>)}
      </ul>
    )
  }
}

List.propTypes = {
  points: PropTypes.array.isRequired
}
