import React, { useEffect, useState } from "react";
import { Viewport } from "react-is-in-viewport";
import { AboutMe } from "../components/AboutMe";
import { Container } from "../components/Container";
import { DownArrow } from "../components/DownArrow";
import { Fixed } from "../components/Fixed";
import { NavBar } from "../components/NavBar";
import { Page } from "../components/Page";
import { SocialIcons } from "../components/SocialIcons";
import { SubText } from "../components/SubText";
import { Title } from "../components/Title";
import { UpArrow } from "../components/UpArrow";
import { Wrapper } from "../components/Wrapper";
import { onScroll } from "../lib/onScroll";
import { sleep } from "../lib/sleep";

interface IIndex {}

const Index: React.FC<IIndex> = () => {
  const [titleIsIn, setTitleIsIn] = useState(false);
  const [subTextIsIn, setSubTextIsIn] = useState(false);
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
              setSubTextIsIn(true);
            }}
            onLeave={() => {
              setTitleIsIn(false);
              setSubTextIsIn(false);
            }}
          >
            <Title offset={0} inView={titleIsIn} text="Evan Christians" />
            <SubText offset={0} inView={subTextIsIn}>
              {/* I'm a <strong>Cape Town</strong> based{" "}
              <strong>software engineer</strong> with experience in{" "}
              <strong>full stack</strong> web development and strong interests
              in <strong>experience design</strong> and{" "}
              <strong>seamless integration</strong>. */}
              I Build Things & I Love It.
            </SubText>
          </Viewport>
        </Wrapper>
      </Page>
      <Page>
        <Wrapper>
          <AboutMe />
        </Wrapper>
      </Page>
    </Container>
  );
};

export default Index;
