import React, {Component} from 'react'
import './App.scss'
import {Container, Row, Col} from 'reactstrap'
import Experience from './Experience'
import Subtitle from './Subtitle'
import Title from './Title'
import me from './images/me.png'
import brighttalkLogo from './images/logos/brighttalk.svg'

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <Title>Dean James</Title>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={6}>
              <img className="img-fluid profile-pic" src={me} alt="Dean James"/>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <div className="h2">Software Delivery &amp; Agile Solutions Professional</div>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Subtitle>Profile</Subtitle>
              <p>A confident, highly motivated and passionate Agile professional with a broad range of skills. I have more than six years experience in nurturing teams to focus and deliver customer and business needs. I pride myself on enabling and guiding evolution at the team and organisation level, consistently striving for a high standard of work, being good-natured, outgoing and having a good sense of humour.</p>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Subtitle>Experience</Subtitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <Experience
                jobTitle="Agile Delivery Manager"
                companyName="BrightTALK"
                companyLogo={brighttalkLogo}
                otherTitles={['Senior Front-End Software Engineer', 'Team Lead']}
                startDate={1301313600}
                endDate={1530532800}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Professional Skills</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Skills here...</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Personal</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              Personal skills here...
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Contact</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              Contact details here...
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Social</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              Links in here?...
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )

  }

}

export default App
