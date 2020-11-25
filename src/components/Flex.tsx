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
    max-width: 30rem;
    padding: 1rem;
    line-height: 1.6;
    transform: translateY(8rem) skewY(8deg);
    opacity: 0;
    transition: transform 1.3s ${({ theme }: { theme: Theme }) => theme.easings.outQuint}, opacity 500ms ease 300ms;
  }

  &.in {
    p {
      opacity: 1;
      transform: translateY(0);
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
