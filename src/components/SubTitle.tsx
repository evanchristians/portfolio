import { DOMAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../types";

interface ISubTitle {
  inView?: boolean;
  text: string;
}

const SSubTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.mono};
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  line-height: 1;
  margin: 0 0 0 4px;
  max-width: 20rem;
  ${({ theme }: { theme: Theme }) => theme.sizes.lg} {
    font-size: 26px;
  }
`;

export const SubTitle: React.FC<ISubTitle & DOMAttributes<HTMLDivElement>> = ({
  text,
  inView,
}) => {
  return <SSubTitle className={inView ? "in-view" : ""}>{text}</SSubTitle>;
};
