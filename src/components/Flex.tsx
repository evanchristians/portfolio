import styled from "styled-components";

const SFlex = styled.div`
  display: flex;
  p {
    max-width: 30rem;
    padding: 3rem;
    line-height: 1.6;
  }
`;

interface IFlex {}

export const Flex: React.FC<IFlex> = ({ children }) => {
  return <SFlex>{children}</SFlex>;
};
