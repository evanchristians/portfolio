import styled from "styled-components";
import { Theme } from "../types";

const SFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }: { theme: Theme }) => theme.sizes.md} {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  p {
    max-width: 30rem;
    padding: 1rem;
    line-height: 1.6;
  }
`;

interface IFlex {}

export const Flex: React.FC<IFlex> = ({ children }) => {
  return <SFlex>{children}</SFlex>;
};
