import styled from "styled-components";
import { Theme } from "../types";

const SHome = styled.a`
  z-index: 1;
  text-decoration: none;
  position: relative;
  line-height: 0.75;
  padding: 0.75rem;
  display: flex;
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.primary};
  font-size: 14px;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  justify-content: center;
  background: ${({ theme }: { theme: Theme }) => theme.colors.background};
  align-items: center;
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  transition: all 400ms
    ${({ theme }: { theme: Theme }) => theme.easings.outExpo};

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
`;

const SNavBar = styled.nav`
  z-index: 9;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  padding: 1rem;
  top: 0;
  left: 0;

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    padding: 1rem 2rem;
  }

  p {
    font-size: 14px;
    margin-left: 2rem;
    opacity: 0.5;
    display: flex;
    align-items: center;

    i {
      font-size: 10px;
      margin-right: 0.5rem;
    }
  }

  .nav {
    display: flex;
    justify-self: flex-end;
    list-style-type: none;
    margin-left: auto;
    margin-top: 0;
    margin-bottom: 0;

    li {
      display: none;
      margin-left: 1rem;
      /* background: ${({ theme }: { theme: Theme }) => theme.colors.background}; */

      ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
        margin-left: 2.5rem;
      display: block;

      }
    }
    a {
      font-size: 14px;
      color: inherit;
      text-decoration: none;
      font-family: ${({ theme }: { theme: Theme }) => theme.fonts.body};
      font-weight: 400;
      position: relative;
      display: block;
      padding: .2rem;

      &:after {
        content: "";
        height: 1px;
        width: 0;
        position: absolute;
        bottom: -4px;
        right: 0;
        background: ${({ theme }: { theme: Theme }) => theme.colors.primary};
        transition: width 300ms
          ${({ theme }: { theme: Theme }) => theme.easings.outExpo};
      }

      &:hover {
        &:after {
          width: 100%;
          left: 0;
        }
        span {
          color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
        }
      }

      span {
        display: none;
        color: ${({ theme }: { theme: Theme }) => theme.colors.greyLighter};
        transition: color 100ms;

        ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
          display: inline;
        }
      }
    }
  }
`;

interface INavBar {}

export const NavBar: React.FC<INavBar> = () => {
  return (
    <SNavBar>
      <SHome href="#home">E</SHome>
      <ul className="nav">
        <li>
          <a href="#about">
            <span>01 &mdash;</span> about
          </a>
        </li>
        <li>
          <a href="/">
            <span>02 &mdash;</span> experience
          </a>
        </li>
        <li>
          <a href="/">
            <span>03 &mdash;</span> work
          </a>
        </li>
      </ul>
    </SNavBar>
  );
};
