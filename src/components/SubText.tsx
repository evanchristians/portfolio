import { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ISubText {
  inView?: boolean;
  offset?: number;
}

const SSubText = styled.p<any>`
  text-align: center;
  font-size: clamp(32px, 3vw, 54px);
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  font-weight: 800;
  color: transparent;
  line-height: 1.1;
  margin: 0 0 2rem 4px;
  padding: 0;
  max-width: 48rem;
  transform: translateY(25px) skewY(4deg);
  transform-origin: left;
  transition: transform 0.6s
      ${({ theme }: { theme: Theme }) => theme.easings.outExpo},
    color 0.8s ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    text-align: left;
    padding: 1rem 2rem 1rem 0;
  }

  strong {
    position: relative;
    z-index: 2;
    color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  }

  &.in-view {
    color: ${({ theme }: { theme: Theme }) => theme.colors.primaryTransparent};
    transform: none;
    transition-duration: 1.5s;
  }
`;

export const SubText: React.FC<ISubText & DOMAttributes<HTMLDivElement>> = ({
  children,
  inView,
  offset,
}) => {
  return (
    <SSubText offset={offset} className={inView ? "in-view" : ""}>
      {children}
    </SSubText>
  );
};
