import React from "react";

// interface KeyedStrings {
//   [key: string]: string
// }

// const keyed: KeyedStrings = {
//   foo: 'bar',
//   bar: 'foo'
// }

// type KeyedDetails = {
//   [key: string]: string
// }

interface TabularDetailsProps {
  //details: string[] | KeyedDetails
  details: any;
}

export default class TabularDetails extends React.Component<
  TabularDetailsProps
> {
  render() {
    return (
      <table className="tab-details">
        <tbody>
          {Object.entries(this.props.details).map(value => {
            let key = value[0],
              detail = value[1] as Array<any>;

            if (Array.isArray(detail)) {
              detail = detail.map((value, key) => {
                let br =
                  key === detail.length - 1 ? (
                    ""
                  ) : (
                    <React.Fragment key={`br-${key}`}>
                      ,<br />
                    </React.Fragment>
                  );
                return (
                  <React.Fragment key={`value-br-${key}`}>
                    {value}
                    {br}
                  </React.Fragment>
                );
              });
            } else if (typeof detail === "object") {
              //@ts-ignore @prettier-ignore
              //prettier-ignore
              detail = [<a href={detail.url} key={`link-${key}`}>{detail.text}</a>];
            }

            return (
              <tr key={`detail-${key}`}>
                <td className="key">{key}</td>
                <td className="detail">{detail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
