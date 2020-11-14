import styled from "styled-components";
import { Theme } from "../types";

const SWrapper = styled.section`
  display: flex;
  max-width: 1024px;
  padding: 1rem;
  margin: 0 auto;
  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    padding: 2rem;
  }
`;

interface IWrapper {}

export const Wrapper: React.FC<IWrapper> = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};
