import React from 'react';
import styled from 'styled-components';
import {Header} from './Components/Header/Header';

import Logo from './img/LabZap.svg'

function App() {
  return (
    <div className="App">
        <Header logo={Logo}/>
      <nav>
      </nav>
      <main>
        <label htmlFor="#">Remetente:</label>
        <input type="text" />
        <label htmlFor="#">Msg:</label>
        <input type="text" />
        <button>
          Enviar Mensagem
        </button>
      </main>
      <aside>
      </aside>
      <footer>
      </footer>
    </div>
  );
}

export default App;
