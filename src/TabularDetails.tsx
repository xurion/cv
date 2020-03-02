import React from "react";

interface TabularDetailsProps {
  children: React.ReactElement[];
}

export default (props: TabularDetailsProps) => {
  return (
    <table className="tab-details">
      <tbody>{props.children}</tbody>
    </table>
  );
};

interface TabularDetailProps {
  label: string;
  children: string;
}

export const TabularDetail = (props: TabularDetailProps) => {
  return (
    <tr key={`detail-${props.label}`}>
      <td className="label">{props.label}</td>
      <td className="detail">{props.children}</td>
    </tr>
  );
};

interface TabularDetailLinkProps {
  children: string;
  label: string;
  url: string;
}

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
