import { Container, Row, Col } from "reactstrap";
import Experience from "../components/Experience";
import Subtitle from "../components/Subtitle";
import ReadMore from "../components/ReadMore";
import List from "../components/List";
import TabularDetails, {
  TabularDetail,
  TabularDetailLink,
} from "../components/TabularDetails";
import Br from "../components/Br";
import Portrait from "../components/Portrait";
import GithubRibbon from "../components/GithubRibbon";
import BlockStrip from "../components/BlockStrip";
import Meta from "../components/Meta";
import {
  Experience as ExperienceType,
  NestedStringArray,
  Social,
} from "../types";

type Props = {
  citizenship: string;
  complimentarySkills?: string[];
  dob?: string;
  email?: string;
  experience: ExperienceType[];
  forenames: string;
  gender?: string;
  githubRibbonUrl?: string;
  introductions: string[];
  loc: string;
  me: string[];
  meReadMore?: string[];
  profession: string;
  profileImage: string;
  skills: NestedStringArray;
  social: Social[];
  surname: string;
  telephone?: string;
};

const App = ({
  citizenship,
  complimentarySkills,
  dob,
  email,
  experience,
  forenames,
  gender,
  githubRibbonUrl,
  introductions,
  loc,
  me,
  meReadMore,
  profession,
  profileImage,
  skills,
  social,
  surname,
  telephone,
}: Props) => {
  const fullName = `${forenames} ${surname}`;
  return (
    <>
      <Meta title={`${fullName} - ${profession}`} />
      <BlockStrip />
      <Container>
        {githubRibbonUrl && <GithubRibbon url={githubRibbonUrl} />}
        <Row>
          <Col xs={12} sm={8} md={9} lg={10}>
            <h1 className="text-center text-lg-left">{fullName}</h1>
            <Col xs={6} className="d-sm-none offset-3">
              <Portrait name={fullName} src={profileImage} />
            </Col>
            <div className="h2 text-center text-lg-left">{profession}</div>
          </Col>
          <Col
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="d-none d-sm-block text-lg-right"
          >
            <Portrait name={fullName} src={profileImage} />
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
            {introductions.map((introduction, i) => (
              <p key={i.toString()}>{introduction}</p>
            ))}
            <Br />

            <Subtitle>Skills</Subtitle>
            <List points={skills} />
            <Br />

            {complimentarySkills && (
              <>
                <Subtitle>Complimentary skills</Subtitle>
                <List points={complimentarySkills} />
                <Br />
              </>
            )}

            <Subtitle>Me</Subtitle>
            {me.map((m, i) => (
              <p key={i.toString()}>{m}</p>
            ))}
            {meReadMore && (
              <>
                <ReadMore>
                  {meReadMore.map((m, i) => (
                    <p key={i.toString()}>{m}</p>
                  ))}
                </ReadMore>
                <Br />
              </>
            )}

            <Subtitle>Contact</Subtitle>
            <TabularDetails>
              <TabularDetail label="Surname">{surname}</TabularDetail>
              <TabularDetail
                label={`Forename${forenames.length > 1 ? "s" : ""}`}
              >
                {forenames}
              </TabularDetail>
              {dob && <TabularDetail label="Birth">{dob}</TabularDetail>}
              {gender && <TabularDetail label="Gender">{gender}</TabularDetail>}
              <TabularDetail label="Location">{loc}</TabularDetail>
              <TabularDetail label="Citizenship">{citizenship}</TabularDetail>
              {telephone && (
                <TabularDetail label="Telephone">{telephone}</TabularDetail>
              )}
              {email && <TabularDetail label="Email">{email}</TabularDetail>}
            </TabularDetails>
            <Br className="d-lg-none" />
          </Col>

          <Col xs={12} lg={6}>
            <Subtitle>Experience</Subtitle>
            {experience.map((exp, i) => (
              <Experience
                key={i.toString()}
                experience={exp}
                noMargin={i === experience.length - 1}
              />
            ))}
            <Br />

            <Subtitle>Social</Subtitle>
            {social && (
              <TabularDetails links>
                {social.map((social, i) => (
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
    </>
  );
};

export default App;
