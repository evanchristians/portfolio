import { useState } from "react";
import { Viewport } from "react-is-in-viewport";
import styled from "styled-components";
import { sleep } from "../lib/sleep";
import { Theme } from "../types";

const SResumeLink = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 1rem;
  text-decoration: none;
  opacity: 0;
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.white};
  cursor: pointer;
  transition: opacity 800ms ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

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
