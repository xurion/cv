import { PropsWithChildren } from 'react';

const Label = ({ children }: PropsWithChildren) => (
  <td className="align-middle font-bold pr-5">{children}</td>
);

const Detail = ({ children }: PropsWithChildren) => <td>{children}</td>;

export const TabularDetails = ({ children }: PropsWithChildren) => (
  <table>
    <tbody>{children}</tbody>
  </table>
);

type TabularDetailProps = PropsWithChildren & {
  label: string;
};

export const TabularDetail = ({ children, label }: TabularDetailProps) => (
  <tr key={label}>
    <Label>{label}</Label>
    <Detail>{children}</Detail>
  </tr>
);

type TabularDetailLinkProps = PropsWithChildren & {
  label: string;
  url: string;
};

export const TabularDetailLink = ({
  children,
  label,
  url,
}: TabularDetailLinkProps) => (
  <tr key={label}>
    <Label>{label}</Label>
    <Detail>
      <a className="underline" href={url}>
        {children}
      </a>
    </Detail>
  </tr>
);
