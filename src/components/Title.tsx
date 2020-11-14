import React, { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ITitle {
  inView?: boolean;
  text: string;
}

const STitle = styled.h1`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-size: 45px;
  font-weight: 900;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  opacity: 0;
  line-height: 0.9;
  margin: 0 0 25px;
  padding: 1rem 0;
  transition: all 300ms;

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    font-size: 70px;
  }
  ${({ theme }: { theme: Theme }) => theme.sizes.md} {
    font-size: 85px;
  }
  ${({ theme }: { theme: Theme }) => theme.sizes.lg} {
    font-size: 8vw;
  }
  ${({ theme }: { theme: Theme }) => theme.sizes.xl} {
    font-size: 116px;
  }

  &:after {
    content: "";
    position: absolute;
    left: 5px;
    bottom: 0;
    width: 6rem;
    height: 4px;
    background: ${({ theme }: { theme: Theme }) => theme.colors.white};
    margin-top: 15px;
    border-radius: 4px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 100ms
      ${({ theme }: { theme: Theme }) => theme.easings.outExpo};
  }

  &.in-view {
    opacity: 1;

    &:after {
      transform: scaleX(1);
      transition-duration: 900ms;
      transition-delay: 500ms;
    }
  }
`;

const SWord: any = styled.div`
  display: flex;
`;

const SChar: any = styled.div`
  transform: translate(-10px, 20px) rotate(15deg);
  color: transparent;
  transition: color 100ms
      ${({ theme }: { theme: Theme }) => theme.easings.outBack},
    transform 200ms ${({ theme }: { theme: Theme }) => theme.easings.outBack};

  &.in {
    color: ${({ theme }: { theme: Theme }) => theme.colors.white};
    transform: none;
    filter: none;
    transition-delay: ${(props) => 100 + (props as any).delay}ms;
  }
`;

export const Title: React.FC<ITitle & DOMAttributes<HTMLDivElement>> = ({
  inView,
  text,
}) => {
  let position = 0;

  return (
    <STitle className={inView ? "in-view" : ""}>
      {text.split(" ").map((word) => (
        <SWord>
          {word.split("").map((char) => {
            position++;
            return (
              <SChar delay={position * 30} className={inView ? "in" : ""}>
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
