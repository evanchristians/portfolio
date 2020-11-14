import { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ISubTitle {
  inView?: boolean;
  text: string;
}

const SSubTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.mono};
  color: transparent;
  line-height: 1;
  margin: 0 0 0 4px;
  max-width: 30rem;
  transform: translateY(5px);
  transition: all .6s ${({ theme }: { theme: Theme }) => theme.easings.outQuint};
  
  ${({ theme }: { theme: Theme }) => theme.sizes.lg} {
    font-size: 26px;
  }
  
  &.in-view {
    color: ${({ theme }: { theme: Theme }) => theme.colors.white};
    transform: none;
    transition-delay: 800ms;
    transition-duration: 1.5s;
  }
`;

export const SubTitle: React.FC<ISubTitle & DOMAttributes<HTMLDivElement>> = ({
  text,
  inView,
}) => {
  return <SSubTitle className={inView ? "in-view" : ""}>{text}</SSubTitle>;
};
