import React, { useState } from "react";
import { Viewport } from "react-is-in-viewport";
import { Container } from "../components/Container";
import { Title } from "../components/Title";
import { useScroll } from "../lib/useScroll";

interface IIndex {}

const Index: React.FC<IIndex> = () => {
  const [titleIsIn, setTitleIsIn] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  if (typeof window !== "undefined") {
    useScroll(setScrollY);
  }

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
        <Title inView={titleIsIn} offset={scrollY}>
          <span>{"{..."}</span>EvanChristians<span>{" }"}</span>
        </Title>
      </Viewport>
    </Container>
  );
};

export default Index;
