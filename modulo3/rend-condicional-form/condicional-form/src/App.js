import React, { useState } from 'react';
import styled from 'styled-components'
import Etapa1 from "./Componentes/Etapa1";
import Etapa2 from "./Componentes/Etapa2";
import Etapa3 from "./Componentes/Etapa3";
import Final from './Componentes/Final';

const Gerais = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    text-align: center;
`
const Avancar = styled.button`
  font-size: 1em;
  font-weight: 600;
  margin: 10px auto;
  width: 20%;
  padding: 5px;
`


function App() {

  const [avancar, setAvancar] = useState(false)

  const AvancarPagina = () => {
    setAvancar(!avancar)
  }

  if (avancar) {
    return <Etapa1 HandleAvancar={AvancarPagina} />
  }
}

export default App;
