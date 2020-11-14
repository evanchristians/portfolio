import styled from "styled-components";
import { Theme } from "../types";

const SUnderConstruction = styled.main`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  border-radius: 1rem;
  color: #ee8434;
  font-size: 1.2rem;
  box-shadow: 0 0 3rem #0f0f0f2f;
  font-weight: 700;
  background: ${({theme}: {theme: Theme}) => theme.colors.white};
`;

interface IUnderConstruction {}

export const UnderConstruction: React.FC<IUnderConstruction> = ({
  children,
}) => {
  return <SUnderConstruction>{children}</SUnderConstruction>;
};
