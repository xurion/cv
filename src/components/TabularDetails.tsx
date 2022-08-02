type TabularDetailsProps = {
  links?: boolean;
};

export const TabularDetails: React.FC<TabularDetailsProps> = (props) => {
  return (
    <table className={`tab-details${props.links ? " tab-links" : ""}`}>
      <tbody>{props.children}</tbody>
    </table>
  );
};

type TabularDetailProps = {
  label: string;
};

export const TabularDetail: React.FC<TabularDetailProps> = (props) => {
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

export const TabularDetailLink: React.FC<TabularDetailLinkProps> = (props) => {
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
