import { useEffect, useState } from "react";
import { Viewport } from "react-is-in-viewport";
import styled from "styled-components";
import { sleep } from "../lib/sleep";
import { Theme } from "../types";

const SHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(24rem, 100%);
  margin-left: auto;
  padding: 3rem 0;
`;

const SHeading = styled.h2<any>`
  font-size: 26px;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  font-weight: 900;
  padding: 0 .25rem;
  position: relative;
  white-space: nowrap;
  color: ${(props) =>
    !props.isInView ? "transparent" : props.theme.colors.primary};

  transition: color 0ms 500ms;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 400ms
      ${({ theme }: { theme: Theme }) => theme.easings.outQuint};
  }
  &.in::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const SHeadingLead = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  margin: 0 1rem;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 800ms
    ${({ theme }: { theme: Theme }) => theme.easings.outExpo};

  &.in {
    transform: scaleX(1);
  }
`;

interface IAboutMe {}

export const AboutMe: React.FC<IAboutMe> = () => {
  const [isInView, setIsInView] = useState(false);
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    let sleep = setTimeout(() => {
      setAnimateHeading(false);
    }, 200);
    if (!animateHeading)
      return () => {
        clearTimeout(sleep);
      };
  }, [animateHeading]);
  return (
    <Viewport
      type="overlap"
      onEnter={async () => {
        setIsInView(true);
        await sleep(300);
        setAnimateHeading(true);
      }}
      onLeave={() => {
        setIsInView(false);
      }}
    >
      <SHeadingContainer>
        <SHeadingLead className={isInView ? "in" : undefined} />
        <SHeading
          isInView={isInView}
          className={animateHeading ? "in" : undefined}
        >
          About Me
        </SHeading>
      </SHeadingContainer>
    </Viewport>
  );
};
