import React, { useEffect, useState } from "react";
import { Viewport } from "react-is-in-viewport";
import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import { UnderConstruction } from "../components/UnderConstruction";
import { Wrapper } from "../components/Wrapper";

interface IIndex {}

const Index: React.FC<IIndex> = () => {
  const [titleIsIn, setTitleIsIn] = useState(false);

  useEffect(() => {
    console.log(titleIsIn);
  }, [titleIsIn]);
  return (
    <Container>
      <UnderConstruction>
        <i className="fas fa-exclamation-circle"></i> [WIP]
      </UnderConstruction>
      <Page>
        <Wrapper>
          <Viewport
            onEnter={() => {
              setTitleIsIn(true);
            }}
            onLeave={() => {
              setTitleIsIn(false);
            }}
          >
            <Title inView={titleIsIn} text="Evan Christians" />
            <SubTitle
              inView={titleIsIn}
              text="full stack developer with interests in experience design and
            seamless integration."
            />
          </Viewport>
        </Wrapper>
      </Page>
    </Container>
  );
};

export default Index;
