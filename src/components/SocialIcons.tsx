import styled from "styled-components";
import { Theme } from "../types";

const SSocialIcons = styled.ul`
  list-style: none;
  position: absolute;
  top: 25vh;
  right: 2rem;
  opacity: 0;
  transform: translateX(6rem);
  transition: all 1.2s
    ${({ theme }: { theme: Theme }) => theme.easings.outQuint} 1s;

  &.in-view {
    transform: none;
    opacity: 1;
  }
`;

const SSocialIconLink = styled.a`
  display: flex;
  position: relative;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
  font-size: 1.45rem;
  border-radius: 6px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  overflow: hidden;
  text-decoration: none;
  transition: color 200ms
    ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: scaleY(0);
    transform-origin: bottom;
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.white};
    transition: transform 0ms 200ms,
      opacity 200ms ${({ theme }: { theme: Theme }) => theme.easings.outQuint};
  }

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.colors.background};
    &:before {
      transform: none;
      opacity: 1;
      transition: transform 200ms
          ${({ theme }: { theme: Theme }) => theme.easings.outQuint},
        opacity 0ms;
    }
  }
`;

interface ISocialIcons {
  inView?: boolean;
}

export const SocialIcons: React.FC<ISocialIcons> = ({ inView }) => {
  return (
    <SSocialIcons className={inView ? "in-view" : undefined}>
      <li>
        <SSocialIconLink href="https://www.linkedin.com/in/evanchristians/" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </SSocialIconLink>
      </li>
      <li>
        <SSocialIconLink href="https://github.com/evanchristians" target="_blank">
          <i className="fab fa-github"></i>
        </SSocialIconLink>
      </li>
      <li>
        <SSocialIconLink href="mailto:evanryk@gmail.com" target="_blank">
          <i className="fas fa-at"></i>
        </SSocialIconLink>
      </li>
    </SSocialIcons>
  );
};
