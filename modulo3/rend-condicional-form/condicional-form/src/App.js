import React, { useState } from 'react';
import styled from 'styled-components'
import Etapa1 from "./Componentes/Etapa1";
import Etapa2 from "./Componentes/Etapa2";
import Etapa3 from "./Componentes/Etapa3";
import Final from './Componentes/Final';

function App() {

  const [avancar, setAvancar] = useState('Etapa1')

  const handleAvancar = () => {
    if (avancar === 'Etapa1') {
      setAvancar('Etapa2')
    } else if (avancar === 'Etapa2') {
      setAvancar('Final')
    }
  }

  const RenderizaPagina = () => {
    switch (avancar) {
      case 'Etapa1':
        return <Etapa1 />;
        break;
      case 'Etapa2':
        return <Etapa2 />;
        break;
      case 'Final':
        return <Final />;
        break;
      default:
        return;
        break;
    }
  }

  return (
    <div>
      {RenderizaPagina()}
      <button onClick={handleAvancar}>avançar</button>
    </div>
  )
}
export default App;
