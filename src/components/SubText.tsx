import { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ISubText {
  inView?: boolean;
  offset?: number;
}

const SSubText = styled.p<any>`
width: 100%;
text-align: right;
  font-size: clamp(30px, 5vw, 54px);
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  font-weight: 800;
  opacity: 0;
  line-height: 1.1;
  /* margin: 0 0 2rem 4px; */
  margin-left: auto;
  margin-right: 2rem;
  margin-top: -1rem;
  max-width: 48rem;
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
    opacity: 0.7;
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
