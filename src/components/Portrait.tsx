import styled from "styled-components";
import { lg } from "../tools/mixins";

type Props = {
  name: string;
};

const StyledImg = styled.img`
  margin-bottom: 10px;

  ${lg(`
    & {
      width: 60%;
    }
  `)}
`;

const Portrait = (props: Props) => (
  <StyledImg
    className="img-fluid"
    src={`${process.env.PUBLIC_URL}/images/me.png`}
    alt={props.name}
  />
);

export default Portrait;
