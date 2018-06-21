import React, {Component} from 'react'
import './App.scss'
import {Row, Col} from 'reactstrap'
import PropTypes from 'prop-types'

export default class Experience extends Component {

  render() {

    return (
      <Row>
        <Col>
          <h4 className="job-title">{this.props.jobTitle}</h4>
          <div className="other-titles">Other titles: {this.props.otherTitles.join(', ')}</div>
          <div className="company-name">{this.props.companyName}</div>
          <div className="period">{this.props.startDate} - {this.props.endDate}</div>
          <ul className="details">
            <li className="detail">Point...</li>
            <li className="detail">Point...</li>
            <li className="detail">Point...</li>
          </ul>
        </Col>
      </Row>
    )
  }
}

Experience.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  otherTitles: PropTypes.array.isRequired,
  companyName: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired
}
