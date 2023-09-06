import styled from "styled-components";

const Text = styled.h2`
  margin-bottom: 0;
`;

const Baseline = styled.div`
  color: ${({ theme }) => theme.colour.secondary};
  font-size: ${({ theme }) => theme.font.lg};
  line-height: 0.5;
  margin-bottom: 1rem;
  opacity: 0.25;
  text-align: center;

  &::before {
    content: "~";
  }
`;

type Props = {
  children: string;
};

export const Subtitle = ({ children }: Props) => {
  return (
    <>
      <Text className="text-center">{children}</Text>
      <Baseline />
    </>
  );
};
