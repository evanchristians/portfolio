import styled from "styled-components";
import { Theme } from "../types";

const SWrapper = styled.section`
  /* width: min(1240px, 100%); */
  width: 1584px;
  height: 396px;
  padding: 1rem 2.5rem;
  margin: 0 auto;
  text-align: "right"

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    padding: 4rem;
  }
`;

interface IWrapper {}

export const Wrapper: React.FC<IWrapper> = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};
