import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Moment from "react-moment";

interface ExperienceProps {
  companyLogo: string;
  companyName: string;
  endDate?: number;
  jobTitle: string;
  startDate: number;
  otherTitles?: string[];
  noMargin?: boolean;
  formerly?: string;
}

export default class Experience extends Component<ExperienceProps> {
  render() {
    let classNames = "experience";
    classNames = this.props.noMargin ? `${classNames} last` : classNames;

    return (
      <div className={classNames}>
        <Row>
          <Col>
            <h4 className="job-title text-center">{this.props.jobTitle}</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="6">
            <div className="company-logo">
              <img
                src={this.props.companyLogo}
                alt={this.props.companyName}
                title={this.props.companyName}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.props.formerly && (
              <div className="formerly text-center small">
                Formerly {this.props.formerly}
              </div>
            )}
            <p className="period text-center font-weight-bold small">
              <Moment format="MMM YYYY">{this.props.startDate}</Moment> -{" "}
              {this.props.endDate ? (
                <Moment format="MMM YYYY">{this.props.endDate}</Moment>
              ) : (
                "Present"
              )}
            </p>
            <div className="experience-specifics">
              {this.props.otherTitles && (
                <p className="other-titles text-left small">
                  <b>Other titles:</b> {this.props.otherTitles.join(", ")}
                </p>
              )}
              {this.props.children}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
