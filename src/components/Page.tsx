import styled from "styled-components";

const SPage = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IPage {}

export const Page: React.FC<IPage> = ({ children }) => {
  return <SPage>{children}</SPage>;
};
