import { useState } from "react";
import { Viewport } from "react-is-in-viewport";
import styled from "styled-components";
import { Theme } from "../types";

const SFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }: { theme: Theme }) => theme.sizes.md} {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  p {
    max-width: 40rem;
    line-height: 1.6;
    transform: translateY(3rem) rotate(4deg);
    opacity: 0;
    margin-top: 1rem;
    padding: 1rem 0;
    transition: transform 2s
        ${({ theme }: { theme: Theme }) => theme.easings.outQuint} 400ms,
      opacity 500ms ease 400ms;

    ${({ theme }: { theme: Theme }) => theme.sizes.md} {
      margin-top: 0;
      padding: 1rem;
      max-width: 30rem;
    }
  }

  a {
    color: inherit;
    font-weight: bold;
  }

  &.in {
    p {
      opacity: 1;
      transform: translateY(0);
      &:nth-child(2) {
        transition-delay: 600ms;
      }
      &:nth-child(3) {
        transition-delay: 800ms;
      }
    }
  }
`;

interface IFlex {}

export const Flex: React.FC<IFlex> = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  return (
    <Viewport
      type="overlap"
      onEnter={() => {
        setIsInView(true);
      }}
      onLeave={() => {
        setIsInView(false);
      }}
    >
      <SFlex className={isInView ? "in" : undefined}>{children}</SFlex>
    </Viewport>
  );
};
