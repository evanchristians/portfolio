import styled from "styled-components";
import { Theme } from "../types";

const SSocialIcons = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: fixed;
  top: 50%;
  right: .5rem;
  opacity: 0;
  transform: translateY(-50%) translateX(6rem) skewX(45deg);
  transition: all 1s
    ${({ theme }: { theme: Theme }) => theme.easings.outExpo} 0.5s;

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    right: 2.5rem;
  }

  &.in-view {
    transform: translateY(-50%);
    opacity: 1;
  }
`;

const SSocialIconLink = styled.a`
  cursor: pointer;
  display: flex;
  position: relative;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  font-size: 16px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
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
    transform: scaleX(0);
    transform-origin: left;
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    transition: transform 400ms ${({ theme }: { theme: Theme }) => theme.easings.outExpo},
      opacity 800ms ${({ theme }: { theme: Theme }) => theme.easings.outQuint}
        300ms;
  }

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.colors.background};
    transition-delay: 10ms;

    &:before {
      transform: none;
      transform-origin: right;
      opacity: 1;
      transition: transform 400ms
          ${({ theme }: { theme: Theme }) => theme.easings.outExpo},
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
        <SSocialIconLink
          href="https://www.linkedin.com/in/evanchristians/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </SSocialIconLink>
      </li>
      <li>
        <SSocialIconLink
          href="https://github.com/evanchristians"
          target="_blank"
        >
          <i className="devicon-github-plain"></i>
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
