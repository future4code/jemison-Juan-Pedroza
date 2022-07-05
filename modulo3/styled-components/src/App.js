import React from 'react';
import styled from 'styled-components';

import { Header } from './Components/Header/Header';
import { AsideLeft } from './Components/Nav/Nav';
import { AsideRight } from './Components/Aside/Aside';
import { Footer } from './Components/Footer/Footer';
import { Main } from './Components/Main/Main';

import Logo from "./img/LabZap.svg"

const Body = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 12% 1fr 12%;
  grid-template-rows: 12% 1fr 5%;
  background: white;
`

function App() {
  return (
    <Body>
      <Header logo={Logo} />
      <AsideLeft />
      <Main />
      <AsideRight />
      <Footer />
    </Body>
  );
}

export default App;