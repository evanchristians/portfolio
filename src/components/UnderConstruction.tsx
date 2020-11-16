import { darken } from "polished";
import styled from "styled-components";
import { Theme } from "../types";

const SUnderConstruction = styled.a`
  z-index: 9;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.black};
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  background: ${({ theme }: { theme: Theme }) => theme.colors.warning};
  transition: background 300ms ease;

  &:hover {
    background: ${({ theme }: { theme: Theme }) =>
      darken(0.1, theme.colors.warning)};
  }
`;

interface IUnderConstruction {
  href: string;
  target?: string;
}

export const UnderConstruction: React.FC<IUnderConstruction> = ({
  children,
  href,
  target,
}) => {
  return (
    <SUnderConstruction href={href} target={target}>
      {children}
    </SUnderConstruction>
  );
};
