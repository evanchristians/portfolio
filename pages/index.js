import styled from "styled-components";
import { Container } from "../components/Container";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <Container>
      <Title>Hello World</Title>
    </Container>
  );
}
