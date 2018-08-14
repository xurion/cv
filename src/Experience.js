import React, {Component} from 'react'
import './App.scss'
import {Row, Col} from 'reactstrap'
import PropTypes from 'prop-types'

export default class Experience extends Component {

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <h4 className="job-title">{this.props.jobTitle}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <div className="company-logo">
              <img src={this.props.companyLogo} alt={this.props.companyName} title={this.props.companyName}/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="other-titles">Other titles: {this.props.otherTitles.join(', ')}</div>
            <div className="period">{this.props.startDate} - {this.props.endDate}</div>
            <ul className="details">
              <li className="detail">Details here...</li>
            </ul>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

Experience.propTypes = {
  companyLogo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  endDate: PropTypes.number.isRequired,
  jobTitle: PropTypes.string.isRequired,
  otherTitles: PropTypes.array.isRequired,
  startDate: PropTypes.number.isRequired
}
