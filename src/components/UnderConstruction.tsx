import { transparentize } from "polished";
import styled from "styled-components";
import { Theme } from "../types";

const SUnderConstruction = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: .75rem;
  border-radius: 4px;
  color: #ff7700;
  font-size: 1.2rem;
  font-weight: 700;
  background: ${({ theme }: { theme: Theme }) =>
    transparentize(0.01, theme.colors.background)};
`;

interface IUnderConstruction {}

export const UnderConstruction: React.FC<IUnderConstruction> = ({
  children,
}) => {
  return <SUnderConstruction>{children}</SUnderConstruction>;
};
