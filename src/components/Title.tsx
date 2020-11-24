import React, { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ITitle {
  inView?: boolean;
  text: string;
  offset?: number;
}

const STitle = styled.h1<any>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-size: clamp(45px, 8vw, 136px);
  font-weight: 900;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  line-height: 0.9;
  margin: 10rem 0 0.5rem;
  padding: 1rem 2rem 1rem 0;
  transition: transform 10ms
    ${({ theme }: { theme: Theme }) => theme.easings.outQuint};
  transform: translateY(
    -${(props) => Math.floor((props as any).offset * 0.05)}px
  );

  &:after {
    content: "";
    position: absolute;
    left: 5px;
    bottom: 0;
    width: 9rem;
    height: 1px;
    background: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    border-radius: 4px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 100ms
      ${({ theme }: { theme: Theme }) => theme.easings.outExpo};
  }

  &.in-view {
    &:after {
      transform: scaleX(1);
      transition-duration: 800ms;
      transition-delay: 500ms;
    }
  }
`;

const SWord: any = styled.div`
  display: flex;
`;

const SChar: any = styled.div`
  transform: translate(-10px, 30px) rotate(15deg);
  color: transparent;
  transition: color 100ms
      ${({ theme }: { theme: Theme }) => theme.easings.outBack},
    transform 200ms ${({ theme }: { theme: Theme }) => theme.easings.outBack};

  &.in {
    color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    transform: none;
    filter: none;
    transition-delay: ${(props) => 100 + (props as any).delay}ms;
  }
`;

export const Title: React.FC<ITitle & DOMAttributes<HTMLDivElement>> = ({
  inView,
  text,
  offset,
}) => {
  let position = 0;

  return (
    <STitle offset={offset} className={inView ? "in-view" : ""}>
      {text.split(" ").map((word) => (
        <SWord>
          {word.split("").map((char) => {
            position++;
            return (
              <SChar delay={position * 45} className={inView ? "in" : ""}>
                {char}
              </SChar>
            );
          })}
          <span>&nbsp;</span>
        </SWord>
      ))}
    </STitle>
  );
};
