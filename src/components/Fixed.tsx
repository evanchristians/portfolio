import styled from "styled-components";

const SFixed = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

interface IFixed {}

export const Fixed: React.FC<IFixed> = ({ children }) => {
  return <SFixed>{children}</SFixed>;
};
