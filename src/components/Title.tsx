import { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ITitle {
  inView?: boolean;
  text: string;
}

const STitle = styled.h1`
  font-size: 45px;
  font-weight: 900;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  opacity: 0;
  line-height: 1;
  margin: 0;
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
`;

export const Title: React.FC<ITitle & DOMAttributes<HTMLDivElement>> = ({
  inView,
  text,
}) => {
  return <STitle className={inView ? "in-view" : ""}>{text}</STitle>;
};
