import { useState, useEffect } from "react";
import { Viewport } from "react-is-in-viewport";
import styled from "styled-components";
import { sleep } from "../lib/sleep";
import { Theme } from "../types";

const SProfileContainer = styled.div`
  display: flex;
  position: relative;
  width: clamp(min(18rem, 100%), 100%, 32rem);
  overflow: hidden;
  margin: 0;
  div {
    width: 100%;
  }

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

const SProfileImage = styled.img<any>`
  display: block;
  width: 100%;
  opacity: ${(props) => (!props.isInView ? "0" : "1")};
  transform: ${(props) => (!props.isInView ? "scale(1.1)" : "scale(1)")};
  transition: opacity 0ms 400ms,
    transform 4s 500ms ${({ theme }: { theme: Theme }) => theme.easings.outExpo};
`;

interface IProfile {}

export const Profile: React.FC<IProfile> = () => {
  const [isInView, setIsInView] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    let sleep = setTimeout(() => {
      setAnimateImage(false);
    }, 300);
    if (!animateImage)
      return () => {
        clearTimeout(sleep);
      };
  }, [animateImage]);
  return (
    <SProfileContainer className={animateImage ? "in" : undefined}>
      <Viewport
        type="overlap"
        onEnter={async () => {
          await sleep(300);
          setIsInView(true);
          await sleep(100);
          setAnimateImage(true);
        }}
        onLeave={() => {
          setIsInView(false);
        }}
      >
        <SProfileImage
          isInView={isInView}
          src="img/me.png"
          alt="Evan Christians, Full Stack Developer"
        />
      </Viewport>
    </SProfileContainer>
  );
};
