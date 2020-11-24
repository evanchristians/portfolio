import { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ISubText {
  inView?: boolean;
  offset?: number;
}

const SSubText = styled.p<any>`
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.body};
  font-weight: 500;
  opacity: 0;
  line-height: 1.5;
  margin: 0 0 0 4px;
  max-width: 40rem;
  padding: 1rem 2rem 1rem 0;
  transform: translateY(25px) skewY(4deg);
  transform-origin: left;
  transition: transform 0.6s
      ${({ theme }: { theme: Theme }) => theme.easings.outExpo},
    color 0.8s ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

  strong {
    position: relative;
    z-index: 2;
    color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  }

  &.in-view {
    opacity: 1;
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
