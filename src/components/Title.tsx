import React, { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ITitle {
  inView?: boolean;
  text: string;
  offset?: number;
}

const STitle = styled.h2<any>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 0;
  font-size: clamp(64px, 8vw, 132px);
  font-weight: 900;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  line-height: 0.9;
  margin: -2rem 0 0.5rem;

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    justify-content: flex-start;
    padding: 1rem 2rem 1rem 0;
  }

  &:after {
    content: "";
    display: none;
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

    ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
      display: block;
    }
  }

  &.in-view {
    &:after {
      transform: scaleX(1);
      transition-duration: 1200ms;
      transition-delay: 500ms;
    }
  }
`;

const SWord: any = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: transform 300ms
    ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

  ${({ theme }: { theme: Theme }) => theme.sizes.xs} {
    margin-right: 1rem;
  }

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    justify-content: flex-start;
    &:first-child {
      transform: translateX(
        -${(props) => Math.floor((props as any).offset * 0.05)}px
      );
    }
    &:last-child {
      transform: translateX(
        ${(props) => Math.floor((props as any).offset * 0.05)}px
      );
    }
  }
`;

const SChar: any = styled.div`
  transform: translate(-10px, 40px) rotate(15deg);
  color: transparent;
  transition: color 100ms
      ${({ theme }: { theme: Theme }) => theme.easings.outBack},
    transform 500ms ${({ theme }: { theme: Theme }) => theme.easings.outBack};

  &.in {
    filter: none;
    color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    transform: none;
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
    <STitle className={inView ? "in-view" : ""}>
      {text.split(" ").map((word, key) => (
        <SWord offset={offset} key={key}>
          {word.split("").map((char, key) => {
            position++;
            return (
              <SChar
                delay={position * 45}
                className={inView ? "in" : ""}
                key={key}
              >
                {char}
              </SChar>
            );
          })}
        </SWord>
      ))}
    </STitle>
  );
};
