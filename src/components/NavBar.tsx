import styled from "styled-components";
import { Theme } from "../types";

const SHome = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  font-size: 18px;
  font-weight: 900;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  justify-content: center;
  align-items: center;
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  cursor: pointer;
  transition: color 400ms
    ${({ theme }: { theme: Theme }) => theme.easings.outExpo};

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.colors.compliment};
  }
`;

const SNavBar = styled.nav`
  z-index: 9;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  padding: 0 0.5rem;
  top: 0;
  left: 0;

  ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
    padding: 1rem 2rem;
  }

  .nav {
    padding: 0;
    display: flex;
    justify-self: flex-end;
    list-style-type: none;
    margin-left: auto;

    li {
      margin-left: 1.5rem;

      ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
        margin-left: 2.5rem;
      }
    }
    a {
      color: inherit;
      text-decoration: none;
      font-family: ${({ theme }: { theme: Theme }) => theme.fonts.mono};
      font-weight: 400;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        width: 0;
        position: absolute;
        bottom: -4px;
        right: 0;
        background: white;
        transition: width 300ms
          ${({ theme }: { theme: Theme }) => theme.easings.outExpo};
      }

      &:hover {
        &:after {
          width: 100%;
          left: 0;
        }
        span {
          opacity: 1;
          color: ${({ theme }: { theme: Theme }) => theme.colors.compliment};
        }
      }

      span {
        opacity: 0.6;
        font-weight: 700;
        transition: all 100ms;
      }
    }
  }
`;

interface INavBar {}

export const NavBar: React.FC<INavBar> = () => {
  return (
    <SNavBar>
      <SHome>
        <i className="fas fa-circle-notch"></i>
      </SHome>
      <ul className="nav">
        <li>
          <a href="">
            <span>01.</span>About
          </a>
        </li>
        <li>
          <a href="">
            <span>02.</span>Work
          </a>
        </li>
        <li>
          <a href="">
            <span>03.</span>Projects
          </a>
        </li>
      </ul>
    </SNavBar>
  );
};
