import React from "react";

type TabularDetailsProps = {
  children: React.ReactNode;
  links?: boolean;
};

const TabularDetails = (props: TabularDetailsProps) => {
  return (
    <table className={`tab-details${props.links ? " tab-links" : ""}`}>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default TabularDetails;

type TabularDetailProps = {
  children: React.ReactNode;
  label: string;
};

export const TabularDetail = (props: TabularDetailProps) => {
  return (
    <tr key={`detail-${props.label}`}>
      <td className="label">{props.label}</td>
      <td className="detail">{props.children}</td>
    </tr>
  );
};

type TabularDetailLinkProps = {
  children: React.ReactNode;
  label: string;
  url: string;
};

export const TabularDetailLink = (props: TabularDetailLinkProps) => {
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
