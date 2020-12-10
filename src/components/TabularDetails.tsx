import React, { FC } from "react";

const TabularDetails: FC = (props) => {
  return (
    <table className="tab-details">
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default TabularDetails;

type TabularDetailProps = {
  label: string;
};

export const TabularDetail: FC<TabularDetailProps> = (props) => {
  return (
    <tr key={`detail-${props.label}`}>
      <td className="label">{props.label}</td>
      <td className="detail">{props.children}</td>
    </tr>
  );
};

type TabularDetailLinkProps = {
  label: string;
  url: string;
};

export const TabularDetailLink: FC<TabularDetailLinkProps> = (props) => {
  return (
    <tr>
      <td className="label">{props.label}</td>
      <td className="detail">
        <a href={props.url} key={`link-${props.url}`}>
          {props.children}
        </a>
      </td>
    </tr>
  );
};