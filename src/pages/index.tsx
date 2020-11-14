import React, { useEffect, useState } from "react";
import { Viewport } from "react-is-in-viewport";
import { Container } from "../components/Container";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import { Wrapper } from "../components/Wrapper";

interface IIndex {}

const Index: React.FC<IIndex> = () => {
  const [titleIsIn, setTitleIsIn] = useState(false);

  useEffect(() => {
    console.log(titleIsIn);
  }, [titleIsIn]);

  return (
    <Container>
      <Wrapper>
        <Viewport
          onEnter={() => {
            setTitleIsIn(true);
          }}
          onLeave={() => {
            setTitleIsIn(false);
          }}
        >
          <SubTitle text="I am" />
          <Title inView={titleIsIn} text="Evan Christians" />
          <SubTitle
            text="Full stack developer with interests in experience design and
            seamless infrastructure."
          />
        </Viewport>
      </Wrapper>
    </Container>
  );
};

export default Index;
