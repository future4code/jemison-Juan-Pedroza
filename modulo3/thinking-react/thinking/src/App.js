import React from "react";
import ListaProdutos from "./ListaProdutos";
import {Produtos} from './MockUpDeDados'

function App() {
  return (
    <div className="App">
      <ListaProdutos meuTeste={Produtos}/>
    </div>
  );
}

export default App;
