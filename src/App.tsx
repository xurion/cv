import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.scss";
import Experience from "./components/Experience";
import Subtitle from "./components/Subtitle";
import ReadMore from "./components/ReadMore";
import List from "./components/List";
import TabularDetails, {
  TabularDetail,
  TabularDetailLink,
} from "./components/TabularDetails";
import Br from "./components/Br";
import Portrait from "./components/Portrait";
import GithubRibbon from "./components/GithubRibbon";
import getConfig from "./Config";

const config = getConfig();

const App = () => {
  const fullName = `${config.forenames} ${config.surname}`;
  return (
    <Container>
      {config.githubRibbon.enabled && (
        <GithubRibbon
          githubUrl={config.githubRibbon.link}
          imgAlt={config.githubRibbon.imageAlt}
          imgSrc={config.githubRibbon.imageSrc}
        />
      )}
      <Row>
        <Col xs={12} sm={8} md={9} lg={10}>
          <h1 className="text-center text-lg-left">{fullName}</h1>
          <Col xs={6} className="d-sm-none offset-3">
            <Portrait name={fullName} />
          </Col>
          <div className="h2 text-center text-lg-left">{config.profession}</div>
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="d-none d-sm-block text-lg-right"
        >
          <Portrait name={fullName} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Br />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Subtitle>Introduction</Subtitle>
          {config.introductions.map((introduction, i) => (
            <p key={i.toString()}>{introduction}</p>
          ))}
          <Br />

          <Subtitle>Skills</Subtitle>
          <List points={config.skills} />
          <Br />

          {config.complimentarySkills && (
            <>
              <Subtitle>Complimentary skills</Subtitle>
              <List points={config.complimentarySkills} />
              <Br />
            </>
          )}

          <Subtitle>Me</Subtitle>
          {config.me.map((m, i) => (
            <p key={i.toString()}>{m}</p>
          ))}
          {config.meReadMore && (
            <>
              <ReadMore>
                {config.meReadMore.map((m, i) => (
                  <p key={i.toString()}>{m}</p>
                ))}
              </ReadMore>
              <Br />
            </>
          )}

          <Subtitle>Contact</Subtitle>
          <TabularDetails>
            <TabularDetail label="Surname">{config.surname}</TabularDetail>
            <TabularDetail
              label={`Forename${config.forenames.length > 1 ? "s" : ""}`}
            >
              {config.forenames}
            </TabularDetail>
            {config.dob && (
              <TabularDetail label="Birth">{config.dob}</TabularDetail>
            )}
            {config.gender && (
              <TabularDetail label="Gender">{config.gender}</TabularDetail>
            )}
            <TabularDetail label="Location">{config.location}</TabularDetail>
            <TabularDetail label="Citizenship">
              {config.citizenship}
            </TabularDetail>
            {config.telephone && (
              <TabularDetail label="Telephone">
                {config.telephone}
              </TabularDetail>
            )}
            {config.email && (
              <TabularDetailLink label="Email" url={`mailto:${config.email}`}>
                {config.email}
              </TabularDetailLink>
            )}
            <TabularDetailLink label="CV" url={config.cvUrl}>
              {config.cvUrl}
            </TabularDetailLink>
          </TabularDetails>
          <Br className="d-lg-none" />
        </Col>

        <Col xs={12} lg={6}>
          <Subtitle>Experience</Subtitle>
          {config.experience.map((exp, i) => (
            <Experience
              key={i.toString()}
              experience={exp}
              noMargin={i === config.experience.length - 1}
            />
          ))}
          <Br />

          <Subtitle>Social</Subtitle>
          {config.social && (
            <TabularDetails>
              {config.social.map((social, i) => (
                <TabularDetailLink
                  key={i.toString()}
                  label={social.label}
                  url={social.url}
                >
                  {social.text}
                </TabularDetailLink>
              ))}
            </TabularDetails>
          )}
        </Col>
        <Col xs={12}>
          <Br />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
