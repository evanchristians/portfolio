import styled from "styled-components";

const SPage = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

interface IPage {
  id?: string;
}

export const Page: React.FC<IPage> = ({ children, id }) => {
  return <SPage id={id}>{children}</SPage>;
};
