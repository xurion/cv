import React, {Component} from 'react'
import PropTypes from 'prop-types'
import List from './List'

export default class TitledList extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.title}</p>
        <List points={this.props.points}/>
      </React.Fragment>
    )
  }
}

TitledList.propTypes = {
  title: PropTypes.string.isRequired,
  points: PropTypes.array.isRequired
}
