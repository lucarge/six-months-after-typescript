import React from "react";
import { S00 } from "slides/S00";
import { S10 } from "slides/S10";
import { S11 } from "slides/S11";
import { S12 } from "slides/S12";
import { S13 } from "slides/S13";
import { S20 } from "slides/S20";
import { S21 } from "slides/S21";
import { S30 } from "slides/S30";
import { S31 } from "slides/S31";
import { S32 } from "slides/S32";
import { S32a } from "slides/S32a";
import { S33 } from "slides/S33";
import { S34 } from "slides/S34";
import { S35 } from "slides/S35";
import { S35a } from "slides/S35a";
import { S36 } from "slides/S36";
import { S37 } from "slides/S37";
import { S38 } from "slides/S38";
import { S40 } from "slides/S40";
import { S41 } from "slides/S41";
import { S42 } from "slides/S42";
import { S43 } from "slides/S43";
import { S50 } from "slides/S50";
import { S51 } from "slides/S51";
import { S52 } from "slides/S52";
import { S53 } from "slides/S53";
import { S54 } from "slides/S54";
import { S55 } from "slides/S55";
import { S56 } from "slides/S56";
import { S57 } from "slides/S57";
import { S58 } from "slides/S58";
import { S59 } from "slides/S59";
import { S59a } from "slides/S59a";
import { S60 } from "slides/S60";
import { S61 } from "slides/S61";
import { S62 } from "slides/S62";
import { S63 } from "slides/S63";
import { S64 } from "slides/S64";
import { S70 } from "slides/S70";
import { S71 } from "slides/S71";
import { S72 } from "slides/S72";
import { S73 } from "slides/S73";
import { S74 } from "slides/S74";
import { S75 } from "slides/S75";
import { S80 } from "slides/S80";
import { S90 } from "slides/S90";
import { Deck, Slide } from "spectacle";
import styled from "styled-components";
import { theme } from "theme";
import breakingChanges from "./breaking_changes.jpg";
import fogOfWar from "./fog_of_war.png";
import introducingTypescript from "./introducing_typescript.png";

const SplitSlide = styled(Slide)`
  bottom: 0;
  display: flex;
  height: 100% !important;
  left: 0;
  margin: 0;
  max-height: 100% !important;
  max-width: 100% !important;
  padding: 0 !important;
  position: absolute;
  right: 0;
  top: 0;
  width: 100% !important;
`;

export const Presentation = () => (
  <Deck controls={false} theme={theme}>
    <Slide bgColor="secondary">
      <S00 />
    </Slide>
    <Slide>
      <S10 />
    </Slide>
    <Slide>
      <S11 />
    </Slide>
    <SplitSlide bgColor="secondary">
      <S12 />
    </SplitSlide>
    <Slide bgColor="secondary">
      <S13 />
    </Slide>
    <Slide>
      <S20 />
    </Slide>
    <Slide>
      <S21 />
    </Slide>
    <Slide>
      <S30 />
    </Slide>
    <Slide bgDarken={0.7} bgImage={fogOfWar}>
      <S31 />
    </Slide>
    <Slide>
      <S32 />
    </Slide>
    <Slide>
      <S32a />
    </Slide>
    <Slide>
      <S33 />
    </Slide>
    <Slide>
      <S34 />
    </Slide>
    <Slide>
      <S35 />
    </Slide>
    <Slide>
      <S35a />
    </Slide>
    <Slide bgDarken={0.7} bgImage={breakingChanges}>
      <S36 />
    </Slide>
    <Slide>
      <S37 />
    </Slide>
    <Slide>
      <S38 />
    </Slide>
    <Slide>
      <S40 />
    </Slide>
    <Slide bgColor="secondary">
      <S41 />
    </Slide>
    <SplitSlide bgColor="secondary">
      <S42 />
    </SplitSlide>
    <Slide bgColor="secondary" bgImage={introducingTypescript}>
      <S43 />
    </Slide>
    <Slide>
      <S50 />
    </Slide>
    <Slide bgColor="secondary">
      <S51 />
    </Slide>
    <Slide bgColor="secondary">
      <S52 />
    </Slide>
    <Slide bgColor="secondary">
      <S53 />
    </Slide>
    <Slide bgColor="secondary">
      <S54 />
    </Slide>
    <Slide bgColor="secondary">
      <S55 />
    </Slide>
    <Slide bgColor="secondary">
      <S56 />
    </Slide>
    <Slide>
      <S57 />
    </Slide>
    <Slide bgColor="secondary">
      <S58 />
    </Slide>
    <Slide>
      <S59 />
    </Slide>
    <Slide>
      <S59a />
    </Slide>
    <Slide>
      <S60 />
    </Slide>
    <Slide>
      <S61 />
    </Slide>
    <Slide>
      <S62 />
    </Slide>
    <Slide>
      <S63 />
    </Slide>
    <Slide>
      <S64 />
    </Slide>
    <Slide bgColor="secondary">
      <S70 />
    </Slide>
    <Slide bgColor="secondary">
      <S71 />
    </Slide>
    <Slide bgColor="secondary">
      <S72 />
    </Slide>
    <Slide bgColor="secondary">
      <S73 />
    </Slide>
    <Slide bgColor="secondary">
      <S74 />
    </Slide>
    <Slide bgColor="secondary">
      <S75 />
    </Slide>
    <Slide>
      <S80 />
    </Slide>
    <Slide bgColor="secondary">
      <S90 />
    </Slide>
  </Deck>
);
