import { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ITitle {
  inView?: boolean;
}

const STitle = styled.h1`
  font-size: 45px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 1600ms
      ${({ theme }: { theme: Theme }) => theme.easings.outQuint},
    transform 1600ms ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

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
    transform: translateY(0);
  }
  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Title: React.FC<ITitle & DOMAttributes<HTMLDivElement>> = (
  props
) => {
  return <STitle className={props.inView ? "in-view" : ""} {...props} />;
};
