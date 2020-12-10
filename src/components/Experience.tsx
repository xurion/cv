import { Row, Col } from "reactstrap";
import Moment from "react-moment";
import { Experience as _Experience } from "../types";
import ReadMore from "./ReadMore";
import TitledList from "./TitledList";
import styled from "styled-components";

type ExperienceProps = {
  experience: _Experience;
  noMargin?: boolean;
};

const StyledH3 = styled.h3`
  margin-bottom: 0;
`;

const Experience = (props: ExperienceProps) => {
  let classNames = "experience";
  const { experience, noMargin } = props;
  classNames = noMargin ? `${classNames} last` : classNames;

  return (
    <div className={classNames}>
      <Row>
        <Col>
          <StyledH3 className="text-center">{experience.jobTitle}</StyledH3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="6">
          <div className="company-logo">
            <img
              src={`${process.env.PUBLIC_URL}/images/${experience.companyLogo}`}
              alt={experience.companyName}
              title={experience.companyName}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {experience.formerCompanyName && (
            <div className="formerly text-center small">
              Formerly {experience.formerCompanyName}
            </div>
          )}
          <p className="period text-center font-weight-bold small">
            {typeof experience.startDate === "number" ? (
              <Moment format="MMM YYYY">{experience.startDate}</Moment>
            ) : (
              experience.startDate
            )}{" "}
            -{" "}
            {experience.endDate ? (
              typeof experience.endDate === "number" ? (
                <Moment format="MMM YYYY">{experience.endDate}</Moment>
              ) : (
                experience.endDate
              )
            ) : (
              "Present"
            )}
          </p>
          <div className="experience-specifics">
            {experience.otherTitles && (
              <p className="other-titles text-left small">
                <b>Other titles:</b> {experience.otherTitles.join(", ")}
              </p>
            )}
            {experience.about.map((about, i) => (
              <p key={i.toString()}>{about}</p>
            ))}
            {experience.aboutReadMore && experience.aboutReadMore.length > 0 ? (
              <ReadMore>
                {experience.aboutReadMore.map((about, i) => (
                  <p key={i.toString()}>{about}</p>
                ))}
                {experience.additionalSkillList && (
                  <TitledList
                    points={experience.additionalSkillList.skills}
                    title={experience.additionalSkillList.title}
                  />
                )}
              </ReadMore>
            ) : (
              experience.additionalSkillList && (
                <ReadMore>
                  <TitledList
                    points={experience.additionalSkillList.skills}
                    title={experience.additionalSkillList.title}
                  />
                </ReadMore>
              )
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
