import React from 'react';
import styled from 'styled-components';

import { Header } from './Components/Header';
import { AsideLeft } from './Components/LeftAside';
import { AsideRight } from './Components/RightAside';
import { Footer } from './Components/Footer';
import { Main } from './Components/Main';

import Logo from "./assets/LabZap.svg";

const Body = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 12% 1fr 12%;
  grid-template-rows: 8% 87% 5%;
  background: black;
`

function App() {
  return (
    <Body>
      <Header logo={Logo}/>
      <AsideLeft />
      <Main/>
      <AsideRight />
      <Footer />
    </Body>
  );
}

export default App;