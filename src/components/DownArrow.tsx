import styled from "styled-components";
import { Theme } from "../types";

const SDownArrow = styled.i<IDownArrow>`
  font-size: 12px;
  position: fixed;
  display: none;
  left: 3rem;
  transform: translateX(-50%)
    ${(props) => (props.show ? "" : "translateY(4rem)")};
  bottom: 5rem;
  color: ${(props) =>
    (props as any).show ? props.theme.colors.primary : "transparent"};
  transition: color 500ms, transform 500ms;

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    display: block;
  }

  span {
    font-weight: 400;
    letter-spacing: 1px;
    position: absolute;
    writing-mode: vertical-rl;
    transform: translateX(50%) rotate(180deg)
      ${(props) => (props.show ? "" : "translateY(2rem)")};
    right: 50%;
    bottom: 1.5rem;
    font-family: ${({ theme }: { theme: Theme }) => theme.fonts.body};
    font-size: 0.9rem;
    transition: transform 500ms;
  }

  &:after {
    content: "";
    position: absolute;
    background: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    bottom: -5rem;
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
  return (
    <SDownArrow show={show} className="fas fa-arrow-down">
      <span>scroll</span>
    </SDownArrow>
  );
};
