import React, { useState } from "react";
import { Viewport } from "react-is-in-viewport";
import { Container } from "../components/Container";
import { Fixed } from "../components/Fixed";
import { Page } from "../components/Page";
import { SocialIcons } from "../components/SocialIcons";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import { UnderConstruction } from "../components/UnderConstruction";
import { Wrapper } from "../components/Wrapper";
import { sleep } from "../lib/sleep";

interface IIndex {}

const Index: React.FC<IIndex> = () => {
  const [titleIsIn, setTitleIsIn] = useState(false);
  const [subTitleIsIn, setSubTitleIsIn] = useState(false);
  const [fixedIsIn, setFixedIsIn] = useState(false);
  const [scrollOffset] = useState(0);

  return (
    <Container>
      <UnderConstruction>
        <i className="fas fa-exclamation-circle"></i> [WIP]
      </UnderConstruction>
      <Viewport
        onEnter={() => {
          setFixedIsIn(true);
        }}
      >
        <Fixed>
          <SocialIcons inView={fixedIsIn} />
        </Fixed>
      </Viewport>
      <Page>
        <Wrapper>
          <Viewport
            onEnter={async () => {
              setTitleIsIn(true);
              await sleep(500);
              setSubTitleIsIn(true);
            }}
          >
            <Title
              offset={scrollOffset}
              inView={titleIsIn}
              text="Evan Christians"
            />
            <SubTitle
              offset={scrollOffset}
              inView={subTitleIsIn}
              text="full stack developer with interests in experience design and
            seamless integration."
            />
          </Viewport>
        </Wrapper>
      </Page>
      <Page></Page>
    </Container>
  );
};

export default Index;
