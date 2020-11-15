import { darken } from "polished";
import styled from "styled-components";
import { Theme } from "../types";

const SUnderConstruction = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  color: ${({ theme }: { theme: Theme }) => darken(.4, theme.colors.warning)};
  font-size: 1.2rem;
  font-weight: 700;
  background: ${({ theme }: { theme: Theme }) => theme.colors.warning};
`;

interface IUnderConstruction {}

export const UnderConstruction: React.FC<IUnderConstruction> = ({
  children,
}) => {
  return <SUnderConstruction>{children}</SUnderConstruction>;
};
