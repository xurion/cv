import React, {Component} from 'react'
import './App.scss'
import {Container, Row, Col} from 'reactstrap'
import Experience from './Experience'
import Subtitle from './Subtitle'
import Title from './Title'
import ReadMore from './ReadMore'
import TitledList from './TitledList'
import me from './images/me.png'
import brighttalkLogo from './images/logos/brighttalk.svg'
import bettorLogo from './images/logos/bettor.png'
import sqLogo from './images/logos/sq.svg'

class App extends Component {
  render() {
    return (
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
            <p>A confident, highly motivated and passionate Agile professional with a broad range of skills. I have
              more than six years experience in nurturing teams to focus and deliver customer and business needs. I
              pride myself on enabling and guiding evolution at the team and organisation level, consistently striving
              for a high standard of work, being good-natured, outgoing and having a good sense of humour.</p>
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
              startDate={1301313600000}
              endDate={1530532800000}
            >
              <p>Responsible for leading the team working on the main client-facing Symfony2 and AngularJS website. My
                role focused on being an Agile servant-leader for the team, moving from Scrum Master to Delivery
                Manager as we transitioned away from the Scrum methodology towards Kanban.</p>
              <ReadMore>
                <p>In the three year period of fully utilising an evolutionary MVP Lean Kanban approach, my team of
                  five (2x developers, 1x tester, 1x product manager and myself) went from delivering between six and
                  nine releases per year to thirty-seven, ninety-three and eighty-six releases in 2015, 2016 and 2017
                  respectively. My team had no increase in staff members in this time - only Agile coaching, constant
                  attention to technical excellence and the empowerment to evolve.</p>
                <p>In the early stages, I would occasionally host Agile games in order to demonstrate the need for
                  teamwork, breaking down work items, and how slowing down to speed up is a must. I also found this
                  approach to be one of the best ways to coach others external to my team who were curious, but yet to
                  be convinced.</p>
                <TitledList title="Other responsibilities include" points={[
                  'Enable and coach the team to utilise Kanban to balance capacity against demand.',
                  'Analyse team bottlenecks and adapt the team approach as required, using Little’s Law, queueing theory and the theory of constraints.',
                  'Track team delivery cadence with cycle times and lead times to identify issues early and enable discussion and adaptation.',
                  'Facilitate team ceremonies and reduce feedback loops with face-to-face conversations.',
                  'Coach the team in the Responsibility process and encourage a safe-to-fail culture for developers to thrive with psychological safety.',
                  'Protect the team from external interruption and unnecessary context switching',
                  'Measure the cost of delay to reveal undeniable need for change.',
                  'Help the team define explicit policies for each stage of work in a team’s process.',
                  'Radiate any and all information out in the open so the status of things is always evident to the team, stakeholders and business.',
                  'Coach the team to focus and invest in customer needs as a priority, providing them the opportunity to help shape what a product looks like and offers.',
                  'Coach the team to ship minimum viable products to reduce both time to market and cost of delay.',
                  'Work with business people to introduce Gherkin scenarios in order for teams, developers and the business to speak the same consistent language before, during and after each project.',
                ]}/>
              </ReadMore>
            </Experience>
          </Col>
        </Row>
        <Row>
          <Col>
            <Experience
              jobTitle="Front-end Team Lead"
              companyName="Bettor.com"
              formerly="IbetX Ltd."
              companyLogo={bettorLogo}
              startDate={1202688000000}
              endDate={1300406400000}
            >
              <p>Responsible for heading the front-end software development and graphic design team. Line managed one dedicated designer and one dedicated JavaScript, CSS and HTML engineer.</p>
              <ReadMore>
                <p>Heavily involved in a two-year website and brand overhaul, built in Zend framework, jQuery and WebSocket technology. Includes the development of payment gateways, real-time user-to-user betting interfaces, social networking tools and sports news feeds.</p>
              </ReadMore>
            </Experience>
          </Col>
        </Row>
        <Row>
          <Col>
            <Experience
              jobTitle="Software Engineer"
              companyName="SQ Digital"
              formerly="SearchQuest UK Ltd."
              companyLogo={sqLogo}
              startDate={0}
              endDate={0}
            >
              <p>Responsible for the majority of a large number of projects from beginning to end. Taking bespoke customer requirements, designing PhotoShop layouts (some including full branding), developing the PHP back-end and JS/HTML/CSS front-end, setting up hosting via IIS and Fasthosts, as well as customer support.</p>
            </Experience>
          </Col>
        </Row>
        {/*<Row>*/}
        {/*<Col>*/}
        {/*<h2>Professional Skills</h2>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*<Col>*/}
        {/*<p>Skills here...</p>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*<Col>*/}
        {/*<h2>Personal</h2>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*<Col>*/}
        {/*Personal skills here...*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*<Col>*/}
        {/*<h2>Contact</h2>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*<Col>*/}
        {/*Contact details here...*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*<Col>*/}
        {/*<h3>Social</h3>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*<Col>*/}
        {/*Links in here?...*/}
        {/*</Col>*/}
        {/*</Row>*/}
      </Container>
    )
  }
}

export default App
