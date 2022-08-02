import styled from "styled-components";
import { lg } from "../tools/mixins";

type Props = {
  name: string;
  src: string;
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

export const Portrait = ({ name, src }: Props) => (
  <StyledImg className="img-fluid" src={src} alt={name} />
);
