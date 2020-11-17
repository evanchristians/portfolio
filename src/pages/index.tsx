import React, { useEffect, useState } from "react";
import { Viewport } from "react-is-in-viewport";
import { Container } from "../components/Container";
import { DownArrow } from "../components/DownArrow";
import { Fixed } from "../components/Fixed";
import { NavBar } from "../components/NavBar";
import { Page } from "../components/Page";
import { SocialIcons } from "../components/SocialIcons";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
// import { UnderConstruction } from "../components/UnderConstruction";
import { UpArrow } from "../components/UpArrow";
import { Wrapper } from "../components/Wrapper";
import { onScroll } from "../lib/onScroll";
import { sleep } from "../lib/sleep";

interface IIndex {}

const Index: React.FC<IIndex> = () => {
  const [titleIsIn, setTitleIsIn] = useState(false);
  const [subTitleIsIn, setSubTitleIsIn] = useState(false);
  const [fixedIsIn, setFixedIsIn] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);

  onScroll(setScrollOffset);

  useEffect(() => {
    if (scrollOffset >= 30) {
      setShowUpArrow(true);
    } else {
      setShowUpArrow(false);
    }

    if (scrollOffset <= window.innerHeight - 30) {
      setShowDownArrow(true);
    } else {
      setShowDownArrow(false);
    }
  }, [scrollOffset]);

  return (
    <Container>
      {/* <UnderConstruction
        href="https://github.com/evanchristians/portfolio"
        target="_blank"
      >
        WIP
        <i className="fas fa-arrow-right" />
      </UnderConstruction> */}
      <Viewport
        onEnter={() => {
          setFixedIsIn(true);
        }}
      >
        <Fixed>
          <SocialIcons inView={fixedIsIn} />
          <UpArrow show={showUpArrow} />
          <DownArrow show={showDownArrow} />
        </Fixed>
      </Viewport>
      <NavBar />
      <Page>
        <Wrapper>
          <Viewport
            type="overlap"
            onEnter={async () => {
              setTitleIsIn(true);
              await sleep(500);
              setSubTitleIsIn(true);
            }}
            onLeave={() => {
              setTitleIsIn(false);
              setSubTitleIsIn(false);
            }}
          >
            <Title offset={0} inView={titleIsIn} text="Evan Christians" />
            <SubTitle offset={0} inView={subTitleIsIn}>
              I'm a <strong>Cape Town, ZA</strong> based{" "}
              <strong>software engineer</strong> with experience in{" "}
              <strong>full stack</strong> web development and strong interests
              in <strong>experience design</strong> and{" "}
              <strong>seamless integration</strong>.
            </SubTitle>
          </Viewport>
        </Wrapper>
      </Page>
      <Page></Page>
      <Page></Page>
    </Container>
  );
};

export default Index;
