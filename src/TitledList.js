import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class TitledList extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.title}</p>
        <ul>
          {this.props.points.map(point => <li>{point}</li>)}
        </ul>
      </React.Fragment>
    )
  }
}

TitledList.propTypes = {
  title: PropTypes.string.isRequired,
  points: PropTypes.array.isRequired
}
