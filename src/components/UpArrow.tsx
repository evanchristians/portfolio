import styled from "styled-components";
import { Theme } from "../types";

const SUpArrow = styled.i<IUpArrow>`
  font-size: 12px;
  position: fixed;
  left: 1rem;
  top: 6rem;
  color: ${(props) =>
    (props as any).show ? props.theme.colors.black : "transparent"};
  transition: color 500ms ${(props) => ((props as any).show ? "0ms" : "500ms")};

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    left: 2.6rem;
  }

  &:after {
    content: "";
    position: absolute;
    background: ${({ theme }: { theme: Theme }) => theme.colors.black};
    top: 1.5rem;
    left: 50%;
    transform: translateX(-1px);
    width: 2px;
    height: ${(props) => ((props as any).show ? "3rem" : "0")};
    transition: height 700ms
      ${({ theme }: { theme: Theme }) => theme.easings.outQuint};
  }
`;

interface IUpArrow {
  show?: boolean;
}

export const UpArrow: React.FC<IUpArrow> = ({ show }) => {
  return <SUpArrow show={show} className="fas fa-arrow-up" />;
};
