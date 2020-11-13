import styled from "styled-components";
import { Theme } from "../types";

const SContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  padding: 1rem;
  ${({ theme }) => theme.sizes.sm} {
    padding: 0;
  }
`;

interface IContainer {}

export const Container: React.FC<IContainer> = (props) => {
  return <SContainer {...props} />;
};
