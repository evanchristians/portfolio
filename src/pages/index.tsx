import React, { useState } from "react";
import { Container } from "../components/Container";
import { Title } from "../components/Title";
import { Viewport } from "react-is-in-viewport";

interface IIndex {}

const Index: React.FC<IIndex> = () => {
  const [titleIsIn, setTitleIsIn] = useState(false);
  return (
    <Container>
      <Viewport
        onEnter={() => {
          setTitleIsIn(true);
        }}
        onLeave={() => {
          setTitleIsIn(false);
        }}
      >
        <Title inView={titleIsIn}>
          Evan Christians<span>.co.za</span>
        </Title>
      </Viewport>
    </Container>
  );
};

export default Index;
