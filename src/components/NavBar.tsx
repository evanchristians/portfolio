import styled from "styled-components";
import { Theme } from "../types";

const SHome = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 2px;
  border: 2px solid ${({ theme }: { theme: Theme }) => theme.colors.greyLighter};
  font-size: 14px;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
  justify-content: center;
  align-items: center;
  color: ${({ theme }: { theme: Theme }) => theme.colors.greyLighter};
  cursor: pointer;
  transition: all 400ms
    ${({ theme }: { theme: Theme }) => theme.easings.outExpo};

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    border-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};

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
      font-size: 14px;
      color: inherit;
      text-decoration: none;
      font-family: ${({ theme }: { theme: Theme }) => theme.fonts.body};
      font-weight: 400;
      position: relative;

      &:after {
        content: "";
        height: 2px;
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
        color: ${({ theme }: { theme: Theme }) => theme.colors.greyLighter};
        transition: color 100ms;
      }
    }
  }
`;

interface INavBar {}

export const NavBar: React.FC<INavBar> = () => {
  return (
    <SNavBar>
      <SHome>
        E
      </SHome>
      <ul className="nav">
        <li>
          <a href="">
            <span>01</span> about
          </a>
        </li>
        <li>
          <a href="">
            <span>02</span> work
          </a>
        </li>
        <li>
          <a href="">
            <span>03</span> projects
          </a>
        </li>
      </ul>
    </SNavBar>
  );
};
