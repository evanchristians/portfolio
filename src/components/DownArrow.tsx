import styled from "styled-components";
import { Theme } from "../types";

const SDownArrow = styled.i<IDownArrow>`
  font-size: 12px;
  position: fixed;
  display: none;
  left: 3rem;
  transform: translateX(-50%) ${(props) => props.show ? "" : "translateY(3rem)"};
  bottom: 4rem;
  color: ${(props) =>
    (props as any).show ? props.theme.colors.primary : "transparent"};
  transition: color 500ms, transform 500ms;

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    display: block;
  }

  &:after {
    content: "";
    position: absolute;
    background: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    bottom: -4.5rem;
    left: 50%;
    transform: translateX(-1px);
    width: 1px;
    height: ${(props) => ((props as any).show ? "4rem" : "0")};
    transition: height 700ms
      ${({ theme }: { theme: Theme }) => theme.easings.outQuint};
  }
`;

interface IDownArrow {
  show?: boolean;
}

export const DownArrow: React.FC<IDownArrow> = ({ show }) => {
  return <SDownArrow show={show} className="fas fa-arrow-down" />;
};
