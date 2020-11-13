import { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ITitle {
  inView?: boolean;
  offset?: number;
}

const STitle = styled.h1`
  font-size: 45px;
  font-weight: 900;
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  opacity: 0;
  transform: translateY(
    ${(props) => Math.floor((props as any).offset * -0.2)}px
  );
  transition: opacity 1600ms
    ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

  ${({ theme }: { theme: Theme }) => theme.sizes.xs} {
    font-size: 50px;
  }
  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    font-size: 75px;
  }
  ${({ theme }: { theme: Theme }) => theme.sizes.lg} {
    font-size: 7.25vw;
  }
  &.in-view {
    opacity: 1;
  }
  span {
    font-size: 26px;
    font-weight: 400;
    font-family: ${({ theme }: { theme: Theme }) => theme.fonts.mono};
  }
`;

export const Title: React.FC<ITitle & DOMAttributes<HTMLDivElement>> = (
  props
) => {
  return <STitle className={props.inView ? "in-view" : ""} {...props} />;
};
