import React, { useEffect, useState } from "react";
import { Viewport } from "react-is-in-viewport";
import styled from "styled-components";
import { sleep } from "../lib/sleep";
import { Theme } from "../types";
import { Flex } from "./Flex";
import { Profile } from "./Profile";

const SHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(24rem, 100%);
  margin: 0 auto;
  padding: 3rem 0 1rem;
`;

const SHeading = styled.h2<any>`
  line-height: 1;
  display: flex;
  align-items: center;
  font-size: clamp(28px, 2.5vw, 42px);
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  font-weight: 800;
  padding: 0 0.25rem;
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

interface IAboutMe {
  offset: any;
}

export const AboutMe: React.FC<IAboutMe> = ({ offset }) => {
  const [isInView, setIsInView] = useState(false);
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    let sleep = setTimeout(() => {
      setAnimateHeading(false);
    }, 350);
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
        <span>01</span>
        <SHeadingLead className={isInView ? "in" : undefined} />
        <SHeading
          isInView={isInView}
          className={animateHeading ? "in" : undefined}
        >
          About Me
        </SHeading>
      </SHeadingContainer>
      <Flex>
        <Profile offset={offset} />
        <div>
          <p>
            I'm a <strong>Cape Town</strong> based{" "}
            <strong>software engineer</strong> with experience in{" "}
            <strong>full stack</strong> web development and strong interests in{" "}
            <strong>experience design</strong> and{" "}
            <strong>seamless integration</strong>.
            <br />
          </p>
          <p>
            I currently work as a <strong>Junior Developer</strong> at{" "}
            <strong>Lima Bean</strong>, a{" "}
            <strong>Digital Marketing Agency</strong> focused on providing{" "}
            <strong>End-to-End</strong> digital solutions for enterprise
            clients. <br />
            <a
              rel="noreferrer"
              target="_blank"
              href="http://limabean.agency/services"
            >
              Learn more about Lima Bean.
            </a>
          </p>
          <p>
            I learnt to write code at a{" "}
            <strong>Web Development Bootcamp</strong> run by{" "}
            <strong>Salesian's Life Choices</strong> &{" "}
            <strong>CodeSpace</strong>, where I was taught the basics of{" "}
            <strong>Full Stack Web Development</strong> in{" "}
            <strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
            <strong>JavaScript (ES6)</strong>, <strong>PHP7</strong> &{" "}
            <strong>MySQL</strong>
          </p>
        </div>
      </Flex>
    </Viewport>
  );
};
