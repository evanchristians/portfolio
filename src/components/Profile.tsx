import { useState, useEffect } from "react";
import { Viewport } from "react-is-in-viewport";
import styled from "styled-components";
import { sleep } from "../lib/sleep";
import { Theme } from "../types";
import Image from "next/image";

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

const SProfileImage = styled.div<any>`
  display: block;
  width: 100%;
  height: auto;
  opacity: ${(props) => (!props.isInView ? "0" : "1")};
  transform: ${(props) =>
    !props.isInView ? "scale(1.1) translateY(1rem)" : "scale(1)"};
  transition: opacity 0ms 400ms,
    transform 4s 500ms
      ${({ theme }: { theme: Theme }) => theme.easings.outQuint};
`;

interface IProfile {}

export const Profile: React.FC<IProfile> = () => {
  const [isInView, setIsInView] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    let sleep = setTimeout(() => {
      setAnimateImage(false);
    }, 350);
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
        <SProfileImage width="512" height="512" isInView={isInView}>
          <Image
            alt="Evan Christians, Full Stack Developer"
            src="/img/me.png"
            width={512}
            height={512}
          ></Image>
        </SProfileImage>
      </Viewport>
    </SProfileContainer>
  );
};
