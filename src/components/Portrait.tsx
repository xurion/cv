import styled from "styled-components";
import { lg } from "../tools/mixins";

type Props = {
  name: string;
};

const StyledImg = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
  filter: grayscale(100%);
  margin-bottom: 10px;
  transition: 1s;

  ${lg(`
    & {
      width: 60%;
    }
  `)}

  &:hover {
    filter: none;
  }
`;

const Portrait = (props: Props) => (
  <StyledImg
    className="img-fluid"
    src={`${process.env.PUBLIC_URL}/images/me.png`}
    alt={props.name}
  />
);

export default Portrait;
