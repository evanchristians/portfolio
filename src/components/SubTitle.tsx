import { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ISubTitle {
  inView?: boolean;
  text: string;
  offset?: number;
}

const SSubTitle = styled.h3<any>`
  font-size: 20px;
  font-weight: 700;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.mono};
  color: transparent;
  line-height: 1.1;
  margin: 0 0 0 4px;
  max-width: 30rem;
  padding: 1rem 2rem 1rem 0;
  transform: translateY(25px) skewY(4deg);
  transform-origin: left;
  transition: transform 0.6s
      ${({ theme }: { theme: Theme }) => theme.easings.outExpo},
    color 0.8s ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

  ${({ theme }: { theme: Theme }) => theme.sizes.lg} {
    font-size: 26px;
  }

  &.in-view {
    color: ${({ theme }: { theme: Theme }) => theme.colors.white};
    transform: none;
    transition-duration: 1.5s;
  }
`;

export const SubTitle: React.FC<ISubTitle & DOMAttributes<HTMLDivElement>> = ({
  text,
  inView,
  offset,
}) => {
  return (
    <SSubTitle offset={offset} className={inView ? "in-view" : ""}>
      {text}
    </SSubTitle>
  );
};
