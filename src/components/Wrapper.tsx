import styled from "styled-components";
import { Theme } from "../types";

const SWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: min(1260px, 100%);
  padding: 4rem 1.5rem;
  margin: 0 auto;

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    padding: 4rem;
  }
`;

interface IWrapper {}

export const Wrapper: React.FC<IWrapper> = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};
