import { Row, Col } from "reactstrap";
import Moment from "react-moment";
import { Experience as _Experience } from "../types";
import { ReadMore } from "./ReadMore";
import { TitledList } from "./TitledList";
import styled from "styled-components";
import hexRgb from "hex-rgb";

type Props = {
  experience: _Experience;
  noMargin?: boolean;
};

const JobTitle = styled.h3`
  margin-bottom: 0;
`;

const CompanyLogoContainer = styled.div`
  ${({ theme }) => {
    const primaryRgb = hexRgb(theme.colour.primary);
    return `
      border: 1px solid
      rgba(${primaryRgb.red}, ${primaryRgb.green}, ${primaryRgb.blue}, 0.25);
      margin: 8px 0;
      padding: 5px 7px;

      img {
        display: block;
        width: 100%;
      };
    `;
  }}
`;

export const Experience = (props: Props) => {
  let classNames = "experience";
  const {
    experience: {
      companyLogo,
      companyName,
      formerCompanyName,
      startDate,
      endDate,
      jobTitle,
      otherTitles,
      about,
      aboutReadMore,
      additionalSkillList,
    },
    noMargin,
  } = props;

  classNames = noMargin ? `${classNames} last` : classNames;

  return (
    <div className={classNames}>
      <Row>
        <Col>
          <JobTitle className="text-center">{jobTitle}</JobTitle>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="6">
          <CompanyLogoContainer>
            <img src={companyLogo} alt={companyName} title={companyName} />
          </CompanyLogoContainer>
        </Col>
      </Row>
      <Row>
        <Col>
          {formerCompanyName && (
            <div className="formerly text-center small">
              Formerly {formerCompanyName}
            </div>
          )}
          <p className="period text-center font-weight-bold small">
            {typeof startDate === "number" ? (
              <Moment format="MMM YYYY">{startDate}</Moment>
            ) : (
              startDate
            )}{" "}
            -{" "}
            {endDate ? (
              typeof endDate === "number" ? (
                <Moment format="MMM YYYY">{endDate}</Moment>
              ) : (
                endDate
              )
            ) : (
              "Present"
            )}
          </p>
          <div className="experience-specifics">
            {otherTitles && (
              <p className="other-titles text-left small">
                <b>Other titles:</b> {otherTitles.join(", ")}
              </p>
            )}
            {about.map((about, i) => (
              <p key={i.toString()}>{about}</p>
            ))}
            {aboutReadMore && aboutReadMore.length > 0 ? (
              <ReadMore>
                {aboutReadMore.map((about, i) => (
                  <p key={i.toString()}>{about}</p>
                ))}
                {additionalSkillList && (
                  <TitledList
                    points={additionalSkillList.skills}
                    title={additionalSkillList.title}
                  />
                )}
              </ReadMore>
            ) : (
              additionalSkillList && (
                <ReadMore>
                  <TitledList
                    points={additionalSkillList.skills}
                    title={additionalSkillList.title}
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
