import styled from "styled-components";
import { Theme } from "../types";

const SSocialIcons = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 20%;
  right: 1.75rem;
  opacity: 0;
  transform: translateY(-50%) translateX(6rem);
  transition: all 1.2s
    ${({ theme }: { theme: Theme }) => theme.easings.outQuint} 1s;

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    right: 2rem;
  }

  &.in-view {
    transform: translateY(-50%);
    opacity: 1;
  }
`;

const SSocialIconLink = styled.a`
  display: flex;
  position: relative;
  width: 36px;
  height: 36px;
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
    filter: blur(5px);
    transform: scaleX(0);
    transform-origin: right;
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.white};
    transition: transform 0ms 300ms,
      opacity 700ms ${({ theme }: { theme: Theme }) => theme.easings.outQuint},
      filter 200ms 200ms;
  }

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.colors.background};
    &:before {
      transform: none;
      opacity: 1;
      filter: blur(0);
      transition: transform 300ms
          ${({ theme }: { theme: Theme }) => theme.easings.outQuint},
        filter 300ms ${({ theme }: { theme: Theme }) => theme.easings.outQuint},
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
