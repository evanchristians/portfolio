import { useState } from "react";
import { Viewport } from "react-is-in-viewport";
import styled from "styled-components";
import { sleep } from "../lib/sleep";
import { Theme } from "../types";

const SResumeLink = styled.a`
z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 1rem;
  text-decoration: none;
  opacity: 0;
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.white};
  cursor: pointer;
  transition: opacity 800ms
    ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

  &:after {
    z-index: -1;
    content: "";
    background: ${({ theme }: { theme: Theme }) => theme.colors.white};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 400ms
      ${({ theme }: { theme: Theme }) => theme.easings.outExpo};
  }

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.colors.background};
    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  i {
    margin-left: 0.5rem;
    font-size: 12px;
  }

  &.in {
    opacity: 1;
  }
`;

interface IResumeLink {}

export const ResumeLink: React.FC<IResumeLink> = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <Viewport
      onEnter={async () => {
        await sleep(800);
        setIsInView(true);
      }}
      onLeave={() => {
        setIsInView(false);
      }}
    >
      <SResumeLink
        className={isInView ? "in" : undefined}
        href="https://resume.evanchristians.co.za"
        target="_blank"
      >
        resume <i className="fas fa-external-link-alt"></i>
      </SResumeLink>
    </Viewport>
  );
};
