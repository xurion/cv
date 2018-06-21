import React, {Component} from 'react'
import './App.scss'
import {Container, Row, Col} from 'reactstrap'
import me from './images/me.png'

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Dean James</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={6}>
              <img className="img-fluid profile-pic" src={me} alt="Dean James"/>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h2>Software Delivery &amp; Agile Solutions Professional</h2>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Profile</h3>
              <p>A confident, highly motivated and passionate Agile professional with a broad range of skills. I have more than six years experience in nurturing teams to focus and deliver customer and business needs. I pride myself on enabling and guiding evolution at the team and organisation level, consistently striving for a high standard of work, being good-natured, outgoing and having a good sense of humour.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Experience</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="experience">
                <h4 className="job-title">Delivery Manager</h4>
                <div className="other-titles">Other titles: Team lead, Senior Front-End Software Engineer</div>
                <div className="company-name">BrightTALK Ltd.</div>
                <div className="period">March 2011 - July 2018</div>
                <ul className="details">
                  <li className="detail">Point...</li>
                  <li className="detail">Point...</li>
                  <li className="detail">Point...</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Professional Skills</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Skills here...</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Personal</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Personal skills here...</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Contact</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Contact details here...</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Social</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Links in here?...</h3>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )

  }

}

export default App
