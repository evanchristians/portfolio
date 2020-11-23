import styled from "styled-components";
import { Theme } from "../types";

const SContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }: { theme: Theme }) => theme.colors.black};
  background: ${({ theme }: { theme: Theme }) => theme.colors.background};
`;

interface IContainer {}

export const Container: React.FC<IContainer> = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
