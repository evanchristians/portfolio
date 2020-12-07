import React, { useEffect, useState } from "react";
import { Viewport } from "react-is-in-viewport";
import { AboutMe } from "../components/AboutMe";
import { AboveHeading } from "../components/AboveHeading";
import { Container } from "../components/Container";
import { DownArrow } from "../components/DownArrow";
import { HeadingContainer } from "../components/HeadingContainer";
import { NavBar } from "../components/NavBar";
import { Page } from "../components/Page";
import { ResumeLink } from "../components/ResumeLink";
import { SocialIcons } from "../components/SocialIcons";
import { SubText } from "../components/SubText";
import { Title } from "../components/Title";
import { Wrapper } from "../components/Wrapper";
import { sleep } from "../lib/sleep";

interface IIndex {}

const Index: React.FC<IIndex> = () => {
  const [titleIsIn, setTitleIsIn] = useState(false);
  const [subTextIsIn, setSubTextIsIn] = useState(false);
  const [fixedIsIn, setFixedIsIn] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const handleScroll = () => setScrollOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (scrollOffset <= 50) {
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
        <SocialIcons inView={fixedIsIn} />
        <DownArrow show={showDownArrow} />
      </Viewport>
      <NavBar />
      <Page id="home">
        <Wrapper>
          <HeadingContainer>
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
              <h1 style={{ display: "none" }}>Evan Christians</h1>
              <AboveHeading />
              <Title
                offset={scrollOffset}
                inView={titleIsIn}
                text="Evan Christians"
              />
              <SubText offset={scrollOffset} inView={subTextIsIn}>
                & I Build Things on the Web.
              </SubText>
              <ResumeLink />
            </Viewport>
          </HeadingContainer>
        </Wrapper>
      </Page>
      <Page id="about">
        <Wrapper>
          <AboutMe offset={scrollOffset}/>
        </Wrapper>
      </Page>
    </Container>
  );
};

export const getStaticProps = async () => {
  const data = null;
  return { props: { data } };
};

export default Index;
