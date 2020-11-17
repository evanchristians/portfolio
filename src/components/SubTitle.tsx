import { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ISubTitle {
  inView?: boolean;
  offset?: number;
}

const SSubTitle = styled.h3<any>`
  font-size: 18px;
  font-weight: 400;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.mono};
  opacity: 0;
  line-height: 1.3;
  margin: 0 0 0 4px;
  max-width: 40rem;
  padding: 1rem 2rem 1rem 0;
  transform: translateY(25px) skewY(4deg);
  transform-origin: left;
  transition: transform 0.6s
      ${({ theme }: { theme: Theme }) => theme.easings.outExpo},
    color 0.8s ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

  ${({ theme }: { theme: Theme }) => theme.sizes.lg} {
    font-size: 20px;
  }

  strong {
    font-weight: 700;
    position: relative;
    z-index: 2;
    color: ${({ theme }: { theme: Theme }) => theme.colors.compliment};
  }

  &.in-view {
    opacity: 1;
    transform: none;
    transition-duration: 1.5s;
  }
`;

export const SubTitle: React.FC<ISubTitle & DOMAttributes<HTMLDivElement>> = ({
  children,
  inView,
  offset,
}) => {
  return (
    <SSubTitle offset={offset} className={inView ? "in-view" : ""}>
      {children}
    </SSubTitle>
  );
};
