import React, { FC } from "react";
import { Row, Col } from "reactstrap";
import Moment from "react-moment";

type ExperienceProps = {
  companyLogo: string;
  companyName: string;
  endDate?: number;
  jobTitle: string;
  startDate: number;
  otherTitles?: string[];
  noMargin?: boolean;
  formerly?: string;
};

const Experience: FC<ExperienceProps> = (props) => {
  let classNames = "experience";
  classNames = props.noMargin ? `${classNames} last` : classNames;

  return (
    <div className={classNames}>
      <Row>
        <Col>
          <h4 className="job-title text-center">{props.jobTitle}</h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="6">
          <div className="company-logo">
            <img
              src={props.companyLogo}
              alt={props.companyName}
              title={props.companyName}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {props.formerly && (
            <div className="formerly text-center small">
              Formerly {props.formerly}
            </div>
          )}
          <p className="period text-center font-weight-bold small">
            <Moment format="MMM YYYY">{props.startDate}</Moment> -{" "}
            {props.endDate ? (
              <Moment format="MMM YYYY">{props.endDate}</Moment>
            ) : (
              "Present"
            )}
          </p>
          <div className="experience-specifics">
            {props.otherTitles && (
              <p className="other-titles text-left small">
                <b>Other titles:</b> {props.otherTitles.join(", ")}
              </p>
            )}
            {props.children}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
